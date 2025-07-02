# Replit.md

## Overview

This is a modern full-stack web application built as a data analyst portfolio for Ahammed Moin Nawaz. The application showcases professional experience, skills, projects, education, and includes a blog section with a contact form. It features a React frontend with TypeScript, an Express.js backend, and uses PostgreSQL with Drizzle ORM for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: Radix UI components with custom styling
- **Charts**: Chart.js for data visualizations
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES modules)
- **API Design**: RESTful API with JSON responses
- **Middleware**: Custom logging and error handling
- **Development**: Hot reload with Vite integration

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with TypeScript schema definitions
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless connection

## Key Components

### Database Schema (shared/schema.ts)
- **contacts**: Contact form submissions with personal details and messages
- **blog_posts**: Blog articles with metadata, content, and tags
- **projects**: Portfolio projects with descriptions and technology stacks

### API Endpoints (server/routes.ts)
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin)
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:slug` - Get specific blog post
- `GET /api/projects/featured` - Get featured projects

### Frontend Pages
- **Home**: Single-page application with multiple sections
- **Sections**: Hero, About, Skills, Experience, Projects, Education, Blog, Contact

### UI Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Forms**: Contact form with validation using React Hook Form
- **Charts**: Interactive data visualizations for skills and projects
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated client-side with Zod schemas
3. Data sent to backend via POST /api/contact
4. Backend validates and stores in PostgreSQL
5. Success/error response sent back to frontend
6. User receives feedback via toast notifications

### Blog/Project Display
1. Frontend requests data from API endpoints
2. Backend queries PostgreSQL via Drizzle ORM
3. Data serialized and returned as JSON
4. Frontend caches data using TanStack Query
5. Components render data with loading states

### Storage Strategy
- **Development**: In-memory storage with sample data
- **Production**: PostgreSQL database with persistent storage
- **Abstraction**: IStorage interface allows switching between implementations

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL provider
- **Connection**: Uses DATABASE_URL environment variable
- **SSL**: Configured for secure connections

### Development Tools
- **Replit Integration**: Custom plugins for development environment
- **Error Handling**: Runtime error overlay for debugging
- **Hot Reload**: Vite HMR with Express integration

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Chart.js**: Data visualization library
- **React Hook Form**: Form handling and validation
- **React Query**: Server state management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle pushes schema changes to PostgreSQL

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reload
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: `DATABASE_URL` for PostgreSQL connection

### Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Update database schema

### Deployment Considerations
- **Static Assets**: Frontend builds to `dist/public` for serving
- **API Routes**: Express server handles API requests
- **Database Migrations**: Drizzle manages schema evolution
- **Environment Variables**: DATABASE_URL required for production

## Changelog

- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.