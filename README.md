# ShutterDash Stories Quotation Editor

A mobile-friendly, no-login quotation editor for ShutterDash Stories. Open `index.html` locally or publish this folder as a static website. It has no build step, app server, or account system.

## Editor features

- 26 English-language proposal designs: 10 editorial looks, five Hindu wedding looks, five Muslim wedding looks, five Christian wedding looks, and the ShutterDash Signature layout recreated from the supplied quotation PDF.
- Edit client, package, pricing, contact, image, and color details.
- Add and reorder ready-made proposal sections, or create custom pages with a heading, subtitle, narrative, bullet list, callout, image, and layout choice.
- Place text fields anywhere on any page. Move them by dragging; adjust size, width, alignment, weight, typeface, and color.
- Hide the toolbox for a clean review on phones and tablets. Move, resize, layer, and delete individual design elements, then undo recent changes.
- Autosave work to the current browser and print/download proposals as PDF.
- Responsive editing pages for phones, tablets, and desktop, with A4 formatting when printing.

Projects are stored in the browser used to edit them. Clearing that browser's site data removes its saved project. Uploaded photos are resized before storage. Each template has a distinct demo cover photo. Demo photos load from Unsplash and require an internet connection.

## Publish

This is a static site. `index.html`, `style.css`, and `app.js` are published by the included GitHub Actions workflow to GitHub Pages. No build command or server is required.

## Project files

- `index.html`, `style.css`, and `app.js`: quotation editor
- `.github/workflows/pages.yml`: deploys the static editor to GitHub Pages when `main` changes

