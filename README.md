# For You, Baby ❤️ — a handmade scrapbook apology site

## Setup

```bash
npm install
npm run dev
```

Open the printed localhost URL.

## Add your real photos & videos

Drop your files into these folders, using these exact names (or edit
`src/constants/content.ts` to match whatever names you used):

- `public/photos/us-01.jpg` — the couple photo on the password screen + hero
- `public/photos/memory-01.jpg` … `memory-06.jpg` — the "Our Favorite Memories" section
- `public/videos/memory-03.mp4` — optional video for one memory card
- `public/photos/gallery-01.jpg` … `gallery-08.jpg` — the masonry gallery (add as many as you like, just update the array in content.ts)
- `public/music/teenage-dream.mp3` — your background track

Until you add real files, every photo slot shows a soft empty placeholder, so
nothing breaks.

## Editing the words

All copy (memory captions, love notes, reasons, promises, the password) lives
in `src/constants/content.ts` — change anything there, no need to touch
components.

## Deploy

```bash
npm run build
```

This outputs a static `dist/` folder you can host anywhere (Vercel, Netlify,
GitHub Pages).

## Notes on the Drive link

I wasn't able to pull files from the Google Drive folder you shared — my
environment has no internet access and the folder needs your Google login
anyway. Just drag the files from Drive into the `public/` folders above.
