# PREDIA

Premium online tools platform — Next.js, TypeScript, Tailwind CSS, PDF.js and pdf-lib.

## Stage 1: Homepage + PDF Studio

This branch contains the first implementation stage:
- Premium PREDIA homepage with the requested brown / cream / beige / gold design system.
- Tool discovery grid, PDF Studio promotion, pricing preview, FAQ and newsletter UI.
- Responsive PDF Studio workspace.
- Local PDF upload and PDF.js page rendering.
- Add text overlays, insert JPG/PNG images, rotate, duplicate and delete pages.
- Export modified documents as PDF using pdf-lib.

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

This is a Next.js application. GitHub Pages only serves static files and does not run a Next.js server. Deploy this project to Vercel or another Next.js-compatible host, or use a static-export architecture with compatible client-only routes. For GitHub Pages specifically, a static export must be configured and tested before deployment.

## PDF editor scope and limitations

The editor processes selected PDFs locally in the browser; it does not upload them to a PREDIA backend. It can render pages, add text, embed JPG/PNG images, rotate pages, duplicate pages, delete pages and export the resulting PDF.

It does not yet replace arbitrary existing embedded PDF text, provide OCR for scanned pages, or offer full drag-and-drop object manipulation. Text added in the editor is an overlay embedded into the exported PDF. Scanned PDFs need OCR before their text can be edited as text. Password-protected or damaged PDFs may fail to open.

## Not connected yet

Authentication, cloud document storage, subscriptions / payment checkout, newsletter provider and server-side conversions are not active. The pricing section clearly labels Pro as coming soon.
