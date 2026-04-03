
<p align="center">An online IDE to write, execute and share multi-language code snippets with a developer-friendly experience</p>

---

### Tech Stack

| Tech | Purpose |
|------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) | React framework for building the frontend |
| ![Convex](https://img.shields.io/badge/Convex-4B4BFF?style=for-the-badge&logo=data&logoColor=white) | Handles backend logic and database |
| ![Clerk](https://img.shields.io/badge/Clerk-5A31F4?style=for-the-badge&logo=clerk&logoColor=white) | Authentication and user session management |
| ![Monaco](https://img.shields.io/badge/Monaco%20Editor-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white) | Core code editing experience (like VS Code) |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) | Utility-first CSS for fast and responsive styling |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | Typed JavaScript to catch errors early |
| ![Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white) | For easy project deployment |
| ![Lemon Squeezy](https://img.shields.io/badge/Lemon%20Squeezy-FFDE59?style=for-the-badge&logo=lemonade&logoColor=black) | Manages payments for Pro Plan |

### Features

- 💻 Multi-language code execution (10 languages)
- 🎨 5 VSCode-inspired themes
- ⚡ Smart output handling (success & error)
- 🔐 Clerk-auth with profile & history tracking
- 🔗 Shareable code snippets
- 🔍 Snippet search & filter
- 📊 Stats dashboard with usage metrics
- 💎 Free & Pro pricing plans (By Lemon Squeezy)
- 🧩 Font size customization for better accessibility


### Installation

#### 1. Clone the Repo

```bash
git clone https://github.com/SnippetTechie/Code-Snippet.git
```
```bash
cd Code-Snippet
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Create `.env.local` File (refer `.env.example`)

#### 4. Running the Project Locally

```bash
# Run the frontend
npm run dev
```
```bash
# In another terminal, start the Convex dev server
npx convex dev
```

Open http://localhost:3000 to view the app.
