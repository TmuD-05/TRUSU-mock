# TRUSU Mock - Frontend

A mock frontend for the Thompson Rivers University Students' Union (TRUSU) website, created for the **COMP4210: Ethical Hacking** project (*Pentesting an Insecure Form Submission Page*).

## Project Overview

This mock replicates the TRUSU website environment to support an authorized penetration testing simulation.
- **Active Pages**: Home (`/`) and News (`/news`)
- **Target Vulnerability Scope**: Unverified sender input on the TRUSU Club "Send an Email" contact form (demonstrating risks of sender impersonation and unauthenticated phishing link propagation).

## Tech Stack

- **React 18** (JavaScript)
- **Vite** (Build Tool & Dev Server)
- **Tailwind CSS** (Styling & Custom TRUSU Theme)
- **React Router DOM v6** (Client-side Routing)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation

```bash
npm install
```

### Development Server

Start the local development server at `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Frontend/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx              # Application entry point & router
│   ├── App.jsx               # Route definitions & layout wrapper
│   ├── index.css             # Tailwind base & global styles
│   ├── components/
│   │   ├── Header.jsx        # TRUSU banner, navigation, social icons
│   │   ├── Footer.jsx        # Footer & volunteer banner
│   │   └── NewsCard.jsx      # Card component for news articles
│   ├── pages/
│   │   ├── HomePage.jsx      # Portal home page
│   │   └── NewsPage.jsx      # Replicated TRUSU News page
│   └── data/
│       └── newsData.js       # Mock news articles & categories
└── README.md
```
