# YAMIN JLC — Japanese Language Center

Responsive React + Vite + Tailwind CSS website for YAMIN Japanese Language Center. The project folder is short: `yamin-jlc`.

## Run on Windows (VS Code)

1. Extract this project folder. The folder name is **yamin-jlc** and `package.json` is directly inside it.
2. In VS Code choose **File → Open Folder** and open `yamin-jlc`.
3. Open **Terminal → New Terminal**. Confirm the terminal path ends in `yamin-jlc` and that `dir` lists `package.json`.
4. Run these commands one at a time:

```powershell
npm.cmd install
npm.cmd run dev
```

5. Open the Local URL printed by Vite (usually `http://localhost:5173/`).

To make a production build:

```powershell
npm.cmd run build
```

The production website is created in `dist/`.

## Cloudflare Pages deployment (free plan)

1. Create a GitHub repository and upload the contents of this project folder.
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the GitHub repository.
4. Set **Framework preset** to `Vite`.
5. Set **Build command** to `npm run build` and **Build output directory** to `dist`.
6. Deploy. Cloudflare provides a free `*.pages.dev` address. A custom domain can be connected if you own one; domain registration itself is usually paid.

## Editable content

- `src/courseDetails.js` — N5–N2 syllabus, fees, class delivery details and 11 rules. Each course page now follows this order: Complete Video Ready Class → course syllabus and fee → required books and the matching class-set image(s) → individual modules → JLPT Old Question video classes → rules and payment. The separate top-of-page “ONLINE CLASS MATERIALS” section has been removed.
- `src/classImages.js` — online-class set image titles and paths.
- `src/shopData.js` — 22 book listings, shop details and payment QR settings.
- `src/content.js` — academy information, translations and sample review text.
- `src/main.jsx` — page structure, navigation and contact page.
- `src/style.css` — colors, responsive layout and animations.

## Images

- Course/class set images: `public/images/classes/`
- Book covers: `public/images/books/`
- Logo/favicon: `public/yamin-jlc-mark.svg`

## Payment QR codes

The KBZPay and WavePay QR images were not included in the latest uploaded attachments. When available, save the verified images as:

- `public/images/kbz-qr.png`
- `public/images/wave-qr.png`

Then edit `src/shopData.js`: set the corresponding `enabled: true` and update the account name/phone text. Do not publish a QR code until its recipient details have been checked.

## Reviews

The moving reviews are sample placeholders. Replace them with genuine student reviews only after receiving permission.
