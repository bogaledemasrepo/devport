# 🚀 Devport — Developer Portfolio

A modern, high-performance developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed with clean UI components, interactive developer widgets, and complete test/lint tooling.

---

## ✨ Features

- **⚡ Next.js 15 App Router & Turbopack:** Fast page loads and server-side rendering.
- **🎨 UI & Styling:** Styled with **Tailwind CSS**, **shadcn/ui**, and **Lucide Icons**.
- **✨ Micro-interactions & Motion:** Page transitions and dynamic list animations powered by **Framer Motion**.
- **🔍 Global Command Palette (`⌘K`):** Quick navigation trigger using `cmdk`.
- **📊 Reading Progress Bar:** Fixed top scroll indicator using Framer Motion springs.
- **💻 Interactive Terminal Card:** Interactive CLI preview card for developer-focused summaries.
- **🌓 Theme Switching:** Integrated light/dark mode powered by `next-themes`.
- **🧪 Unit Testing:** Unit and component testing pre-configured with **Vitest** and **Testing Library**.
- **🧹 Code Quality Hooks:** ESLint, Prettier, **Husky**, and **lint-staged** running pre-commit checks automatically.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15, React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **UI Components:** Radix UI / shadcn/ui primitives
- **Animations:** Framer Motion
- **Testing:** Vitest, `@testing-library/react`, `jsdom`
- **Package Manager:** Bun / pnpm

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) or `pnpm` installed on your system.

### 1. Clone the Repository

```bash
git clone [https://github.com/bogidemasrepo/devport.git](https://github.com/bogidemasrepo/devport.git)
cd devport

```

### 2. Install Dependencies

```bash

bun install

```

### 3. Run the Development Server

```bash
bun run dev

```

## 📂 Project Structure

```text
devport/
├── app/                  # Next.js App Router pages and API routes
├── components/           # Reusable React components & UI primitives
│   ├── ui/               # Radix UI / shadcn base components
│   ├── command-menu.tsx  # Global ⌘K search dialog
│   ├── scroll-progress.tsx# Top scroll progress bar
│   └── terminal-card.tsx # Interactive terminal component
├── constants/            # Site navigation and static site configuration
├── lib/                  # Utility functions (cn, helper functions)
├── types/                # TypeScript interface and type definitions
├── vitest.config.ts      # Vitest unit test configuration
└── eslint.config.mjs     # ESLint flat config setup

```
