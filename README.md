# JobBoard

A responsive job board web application built with React and Tailwind CSS.

## Features

- Responsive layout for desktop, tablet, and mobile
- Sticky header with navigation and profile section
- Hero section with job search visual
- Search bar with keyword, location, and experience filters
- Featured job listings with company details, salary, and tags
- Job bookmarking and saved jobs view with counter tracking
- Category-based job filtering
- Recommended jobs section
- Loading skeleton shimmer during search transitions
- Empty state with filter reset action
- Mobile navigation drawer and bottom navigation bar
- Smooth scrolling between page sections

## Tech Stack

- React 18
- Vite
- Tailwind CSS v4
- Lucide React

## Project Structure

```text
src/
├── assets/
│   └── hero-illustration.jpg
├── components/
│   ├── jobs/
│   │   ├── CompanyLogo.jsx
│   │   ├── JobCard.jsx
│   │   ├── JobList.jsx
│   │   └── JobSkeleton.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── MobileBottomNav.jsx
│   │   ├── MobileDrawer.jsx
│   │   └── Sidebar.jsx
│   ├── search/
│   │   └── SearchBar.jsx
│   └── ui/
│       └── EmptyState.jsx
├── constants/
│   └── navigation.js
├── data/
│   └── jobs.js
├── hooks/
│   └── useJobFilters.js
├── App.jsx
├── index.css
└── main.jsx
```

## How to Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

For production build:

```bash
npm run build
```