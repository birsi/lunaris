<div align="center">

❄️ &nbsp; ✨ &nbsp; 🎄 &nbsp; ✨ &nbsp; ❄️

# 🌙 Lunaris

### A hybrid physical &amp; digital Christmas advent calendar game

*24 doors. 24 riddles. One story that unfolds by candlelight.*

![Next.js](https://img.shields.io/badge/Next.js-16-0b0c10?style=for-the-badge&logo=nextdotjs&logoColor=f4e6c2)
![React](https://img.shields.io/badge/React-19-0b0c10?style=for-the-badge&logo=react&logoColor=62ffd8)
![TypeScript](https://img.shields.io/badge/TypeScript-5-0b0c10?style=for-the-badge&logo=typescript&logoColor=f4e6c2)
![Tailwind](https://img.shields.io/badge/Tailwind-4-0b0c10?style=for-the-badge&logo=tailwindcss&logoColor=62ffd8)
![License](https://img.shields.io/badge/code-MIT-c0392b?style=for-the-badge)

🎁 &nbsp; ⭐ &nbsp; 🕯️ &nbsp; ⭐ &nbsp; 🎁

</div>

---

## 🎅 About

**Lunaris** is an advent calendar with a twist: it lives half in the real world and half on the screen.
Every day from December 1st to 24th, a new riddle unlocks. Solving it means working with the physical
parts of the calendar, finding the code, and entering it here to reveal the next chapter of the story,
complete with its own illustration and spoken narration.

I built it as a personal Christmas gift for my wife **Larissa** 💖

> ⚠️ The game is written in **German**, and this repository contains every riddle, answer and story chapter.
> If you ever want to play it fresh, don't read `app/lib/riddles.ts` 🤫

## 🎄 How it works

| | |
|---|---|
| 🔐 **Entry** | A personal link opens the calendar for the recipient. |
| 📖 **Prologue** | A short illustrated intro with narration sets the scene. |
| 🚪 **Daily door** | Each day unlocks one riddle, tied to an object in the physical calendar. |
| 🔢 **Code entry** | Enter the solution code to open the door and hear the story continue. |
| 🎬 **Finale** | On day 24 the story ends with a short video. |

Progress is kept in the browser's local storage, so there are no accounts and no database.

## 🤖 Made with

- 📝 **Story**: written together with **ChatGPT** (OpenAI's model of late 2025).
- 🎨 **Images, video &amp; speech**: generated with **[ElevenLabs](https://elevenlabs.io)**.
- 💻 **App**: [Next.js](https://nextjs.org) (App Router), React, TypeScript, Tailwind CSS and [Framer Motion](https://www.framer.com/motion/).

## ⛄ Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler |

## 🗂️ Project structure

```
app/
├── auth/         personal entry link
├── intro/        prologue
├── day/[id]/     one page per riddle
├── api/check/    answer check endpoint
├── components/   particles, puzzle input, UI
└── lib/          riddles &amp; story content, progress storage
public/           images, audio and video
```

## 📜 License

The **source code** is released under the [MIT License](LICENSE).
The **story, riddles, images, audio and video** are personal content and are *not* covered by it. All rights reserved.

<div align="center">

❄️ &nbsp; *Merry Christmas* &nbsp; ❄️

Made with ❤️ for Larissa

</div>
