const fs = require('fs');
const path = require('path');

// Basic manual env loader to avoid installing dotenv if not installed, 
// though we can also check if dotenv is in package.json.
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) {
    console.error('.env file not found!');
    process.exit(1);
  }
  const content = fs.readFileSync(envPath, 'utf-8');
  content.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      let value = parts.slice(1).join('=').trim();
      // Remove optional wrapping quotes
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  });
}

loadEnv();

const apiUrl = process.env.WP_API_URL;
const wpUsername = process.env.WP_USERNAME;
const wpAppPassword = process.env.WP_APP_PASSWORD;

if (!apiUrl || !wpUsername || !wpAppPassword) {
  console.error('Missing required environment variables (WP_API_URL, WP_USERNAME, WP_APP_PASSWORD)');
  process.exit(1);
}

const auth = Buffer.from(`${wpUsername}:${wpAppPassword}`).toString('base64');

async function fetchPost(id) {
  const url = `${apiUrl}/posts/${id}?context=edit`;
  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Accept': 'application/json'
      }
    });
    if (!res.ok) {
      const text = await res.text();
      return { id, error: `HTTP ${res.status}: ${text}` };
    }
    const data = await res.json();
    return {
      id,
      title: data.title ? (data.title.raw || data.title.rendered) : '',
      status: data.status,
      categories: data.categories || [],
      acf: data.acf || {}
    };
  } catch (err) {
    return { id, error: err.message };
  }
}

async function run() {
  const results = [];
  for (let i = 219; i <= 226; i++) {
    const result = await fetchPost(i);
    results.push(result);
  }

  console.log('Results:');
  results.forEach(p => {
    if (p.error) {
      console.log(`ID: ${p.id} - Error: ${p.error}`);
    } else {
      console.log(`ID: ${p.id}, Title: "${p.title}", Status: "${p.status}", Categories: [${p.categories.join(', ')}], acf.number: ${p.acf.number}`);
    }
  });

  // Verify constraints:
  // - status draft
  // - category 4
  // - acf.number 1 through 8 in order
  let allDraft = true;
  let allCat4 = true;
  let numbersInOrder = true;
  let hasErrors = false;

  results.forEach((p, idx) => {
    if (p.error) {
      hasErrors = true;
      return;
    }
    if (p.status !== 'draft') {
      allDraft = false;
    }
    if (!p.categories.includes(4)) {
      allCat4 = false;
    }
    const expectedNum = idx + 1;
    if (Number(p.acf.number) !== expectedNum) {
      numbersInOrder = false;
    }
  });

  console.log('\n--- VERIFICATION REPORT ---');
  if (hasErrors) {
    console.log('Error occurred while fetching some posts.');
  } else {
    console.log(`All status are "draft": ${allDraft ? "YES" : "NO"}`);
    console.log(`All contain category 4: ${allCat4 ? "YES" : "NO"}`);
    console.log(`Numbers are 1 through 8 in order: ${numbersInOrder ? "YES" : "NO"}`);
    const overall = (allDraft && allCat4 && numbersInOrder);
    console.log(`Overall Success: ${overall ? "PASS" : "FAIL"}`);
  }
}

run();
