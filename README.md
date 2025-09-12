this is me checking branch


```markdown
# Sales Dashboard - Next.js 14 + Material-UI

A modern, responsive sales dashboard built with Next.js 14, TypeScript, Material-UI, and Zustand for state management.

## Features

- 📊 **Interactive Charts** - Built with Recharts for responsive data visualization
- 🎨 **Material-UI Components** - Consistent design system with custom theming
- 📱 **Fully Responsive** - Mobile-first design with collapsible sidebar
- ⚡ **Performance Optimized** - Next.js 14 with App Router
- 🔄 **State Management** - Zustand for efficient global state
- 🎯 **TypeScript** - Full type safety throughout the application
- 📋 **Real-time Data** - Ready for API integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v5+
- **State Management**: Zustand
- **Charts**: Recharts
- **HTTP Client**: Axios
- **Styling**: MUI Theme + CSS-in-JS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or create a new Next.js project:

```bash
npx create-next-app@latest sales-dashboard --typescript --app
cd sales-dashboard
```

2. Install dependencies:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install zustand axios recharts @mui/x-charts @fontsource/inter
```

3. Copy the provided code files to your project structure

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Main dashboard page
├── components/
│   ├── Layout/
│   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   └── Header.tsx      # Top navigation header
│   └── Dashboard/
│       ├── KPICard.tsx     # Key performance indicator cards
│       ├── TopProducts.tsx # Products table
│       ├── SalesMapping.tsx # Geographic sales visualization
│       └── Charts/         # Chart components
├── store/
│   └── dashboardStore.ts   # Zustand store for state management
└── theme/
    └── theme.ts            # Material-UI theme configuration
```