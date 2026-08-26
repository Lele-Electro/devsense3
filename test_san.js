
const sanitize = function(raw) {
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(raw)) !== null) {
    const textPart = raw.substring(lastIndex, match.index);
    parts.push({ type: 'text', value: textPart });
    parts.push({ type: 'tag', value: match[0] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < raw.length) {
    parts.push({ type: 'text', value: raw.substring(lastIndex) });
  }
  
  return parts.map(p => {
    if (p.type === 'text') {
      return p.value.replace(/\S+/g, '[text]');
    } else {
      return p.value;
    }
  }).join('');
};

const samples = [
  'tester <!-- wp:paragraph -->\n<p>DevSense: Your expert IT partner</p>\n<!-- /wp:paragraph -->',
  'tester <!-- wp:paragraph -->\n<p>As a premier Software Development Company</p>\n<!-- /wp:paragraph -->'
];

samples.forEach(s => {
  console.log('Original:', JSON.stringify(s));
  console.log('Sanitized:', JSON.stringify(sanitize(s)));
});
