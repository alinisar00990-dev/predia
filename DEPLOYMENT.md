# Deploying PREDIA

## Recommended: Vercel

PREDIA uses Next.js 15 and includes browser-side PDF processing. GitHub Pages cannot run a Next.js server, so use Vercel for the first production deployment.

1. Push this branch to GitHub.
2. Sign in to Vercel with GitHub.
3. Import `alinisar00990-dev/predia`.
4. Select the branch `stage-1-premium-home-and-pdf-editor` for the initial preview.
5. Keep the framework preset as Next.js.
6. Use the default build command `npm run build` and output settings.
7. Deploy. No environment variables are required for the current homepage and local PDF editor.

After testing the preview, merge the branch into `main` and set `main` as the production branch in Vercel.

## GitHub Actions

The included workflow runs TypeScript checking and a production Next.js build on pushes to the development branch and on pull requests to main.

## Current product scope

The PDF editor performs supported operations in the browser. No uploaded PDF is sent to a PREDIA server by this version. Authentication, cloud storage, OCR, existing-text replacement, subscriptions and payment processing are not connected yet.
