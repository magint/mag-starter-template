# 🧱 MAG Next.js Starter Template

A pre-configured, production-ready Next.js 15+ starter template with Tailwind CSS, GTM tracking, server actions for lead submission, and more — built to save time and standardize our web projects.

---

## 🚀 Quick Start

Use this command to create a new project from this template:

```bash
npx create-next-app@latest test-mag-template -e https://github.com/magint/mag-starter-template/
cd <website_name>
npm install # or yarn / npm
cp .env.example .env.local
change the dev command in the package.json to use a custom port: "next dev -p <custom_port>"
npm i
npm run dev
```

## Features
| Feature                | Description                                    |
| ---------------------- | ---------------------------------------------- |
| ✅ Next.js (App Router) | Modern routing + layouts                       |
| ✅ Turbopack            | Fast local development                         |
| ✅ TypeScript           | Fully typed                                    |
| ✅ Tailwind CSS         | Utility-first CSS                              |
| ✅ Prettier Config         | Standardised Code Formatting                             |
| ✅ Tailwind Prettier Plugin         | Class Sorting according to the Tailwind docs                              |
| ✅ Google Tag Manager   | With env-based auto load                       |
| ✅ Server Actions       | Submit leads to MAG Backend                    |
| ✅ ESLint               | Pre-configured with Next.js & TypeScript rules |
| ✅ No `/src` Directory  | Keep project root flat                         |
| ✅ Default Import Alias | Uses `@/` (default) for cleaner imports        |
| ✅ Server Utilities     | Reusable backend logic in `lib/server/`        |
| ✅ .env Example         | Environment setup template                     |


## Prerequisites

- Node.js 18.17 or later
- NPM, Yarn, PNPM, or Bun package manager


## Getting Started

Navigate to the ```/lib/config```, ```/lib/utils``` and ```/seo/Seo.tsx``` file to see the list of all TODO comments. You can also cmd/ctrl + shift + f and search for all TODO: items

Once a TODO comment is resolved remove the TODO comment to remove the warning

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

