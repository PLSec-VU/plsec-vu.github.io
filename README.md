# PLSec Website

Astro website for the PLSec research group at VU Amsterdam.

## Development

```sh
npm install
npm run dev
```

## Content

Content is stored in Astro content collections:

- `src/content/news`
- `src/content/posts`
- `src/content/people`
- `src/content/projects`
- `src/content/publications`

The Decap CMS admin interface is available at `/admin` after configuring the GitHub backend in `public/admin/config.yml`.

For local CMS testing:

```sh
npx decap-server
npm run dev
```

## Deployment

The included GitHub Actions workflow builds Astro and deploys `dist/` to GitHub Pages from the `main` branch.
