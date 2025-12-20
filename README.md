# Storezee - Personal Luggage Assistant Website

A modern, responsive website for Storezee, a personal luggage assistant startup that provides secure luggage storage at verified locker points with smart tracking and real-time delivery via Saathi partners.

## Features

- **Homepage** with hero section and company overview
- **How It Works** - 5-step luggage storage process
- **About Us** - Company vision, mission, and values
- **Team** - Member profiles with placeholder photos
- **App Installation** - iOS/Android download links with QR code
- **Legal Pages** - Terms of Service, Privacy Policy, Refund Policy
- **FAQ** - Categorized questions with search functionality
- **Contact Form** - Working form with backend storage
- **Responsive Design** - Mobile-first approach with travel-tech color scheme

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter (lightweight React router)
- **Data Fetching**: TanStack React Query
- **Storage**: In-memory storage (can be upgraded to PostgreSQL)
- **Icons**: Lucide React + React Icons

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git (optional)

## Local Development Setup

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd storezee-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5000`
   - The site will hot-reload when you make changes

## Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run type-check` - Check TypeScript types

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   ├── App.tsx        # Main app component with routing
│   │   ├── main.tsx       # React entry point
│   │   └── index.css      # Global styles and Tailwind
│   └── index.html         # HTML template
├── server/                # Backend Express.js API
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route handlers
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared TypeScript types
│   └── schema.ts         # Data schemas and types
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Key Features Implementation

### Contact Form
- Full form validation using React Hook Form + Zod
- Backend storage with in-memory database
- Success/error toast notifications

### FAQ System
- Categorized questions (General, Storage, Pricing, etc.)
- Search functionality with real-time filtering
- Expandable accordion interface

### Responsive Design
- Mobile-first approach
- Smooth animations and transitions
- Travel-tech color palette (blue/white/soft yellow)
- Rounded card components throughout

### App Installation Page
- iOS and Android download buttons
- QR code placeholder for easy mobile access
- Feature highlights and screenshots section

## Customization

### Colors
Edit `client/src/index.css` to modify the color scheme:
```css
:root {
  --primary: 210 100% 50%;        /* Blue */
  --secondary: 45 100% 85%;       /* Soft Yellow */
  --background: 0 0% 100%;        /* White */
}
```

### Content
- Page content is in `client/src/pages/`
- Team member data in `client/src/lib/mock-data.ts`
- FAQ data in `server/storage.ts`

### Styling
- Uses Tailwind CSS with shadcn/ui components
- Component styles in individual page files
- Global styles in `client/src/index.css`

## Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- Railway
- Replit Deployments

For production deployment:
1. Run `npm run build`
2. Deploy the generated `dist/` folder
3. Ensure environment variables are set

## Support

For questions or issues with local setup, refer to the documentation or contact the development team.