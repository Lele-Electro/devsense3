# HTML/PDF Content to WordPress Flow

```mermaid
flowchart TD
    source[Source HTML or PDF] --> extract[Extract readable text, images, and metadata]
    extract --> prompt[Content preparation prompt]
    prompt --> output[Prompt output<br/>title, WordPress-safe HTML, excerpt,<br/>category recommendation, media selection]
    output --> review{Review extracted content}
    review -->|Revise| prompt
    review -->|Approved| fields[Map approved output to request fields<br/>title, content, excerpt, category ID,<br/>featured media ID]

    fields --> auth[Configure local .env credentials<br/>WP_API_URL, WP_USERNAME,<br/>WP_APP_PASSWORD]
    auth --> verify[post.http<br/>GET /users/me?context=edit]
    verify --> access{API access confirmed?}
    access -->|No| fix[Correct URL, user role, or app password]
    fix --> auth
    access -->|Yes| category[post.http<br/>GET /categories?context=edit]
    category --> categoryDecision{Category exists?}
    categoryDecision -->|No| createCategory[post.http<br/>POST /categories]
    categoryDecision -->|Yes| mediaDecision{Featured image or document asset?}
    createCategory --> mediaDecision

    mediaDecision -->|Yes| upload[post.http<br/>POST /media]
    upload --> mediaId[Capture returned media ID]
    mediaId --> draft
    mediaDecision -->|No| draft[post.http<br/>POST /posts with status: draft]

    draft --> edit[WordPress CMS<br/>review saved draft]
    edit --> approved{Content approved?}
    approved -->|Needs edits| update[post.http<br/>POST /posts/{postId}]
    update --> edit
    approved -->|Yes| publish[post.http<br/>POST /posts/{postId}<br/>status: publish]
    publish --> live[Published WordPress post]
```

## Touchpoints

- **Source and extraction**: HTML/PDF is converted into text, images, and document metadata before it reaches WordPress.
- **Content preparation prompt**: Produces a title, WordPress-safe HTML body, excerpt, category recommendation, and optional image selection. Human review remains required before publication.
- **`post.http`**: Executes the WordPress REST API requests using credentials stored in a local `.env` file.
- **WordPress CMS**: Stores the draft, exposes it for editorial review, and publishes only after approval.

The post payload in `post.http` is the handoff between the prepared prompt output and WordPress. Insert the approved title, HTML content, excerpt, category ID, and optional `featured_media` ID into its `POST /posts` request.
