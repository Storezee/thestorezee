# Local Development Setup Guide for Storezee

## Quick Start

1. **Download the project files** to your computer
2. **Open terminal/command prompt** in the project folder
3. **Run these commands:**
   ```bash
   npm install
   npm run dev
   ```
4. **Open browser** to `http://localhost:5000`

That's it! The website will be running locally.

## Detailed Setup Instructions

### Step 1: Prerequisites
Make sure you have these installed:
- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
- **Code Editor** - VS Code recommended

### Step 2: Get the Project Files
Download all files from this project including:
- All folders: `client/`, `server/`, `shared/`
- Configuration files: `package.json`, `vite.config.ts`, `tailwind.config.ts`, etc.
- Keep the exact folder structure

### Step 3: Install Dependencies
Open terminal in the project root folder and run:
```bash
npm install
```
This will install all required packages (React, Express, Tailwind, etc.)

### Step 4: Start Development Server
```bash
npm run dev
```
You'll see:
```
[express] serving on port 5000
```

### Step 5: View the Website
Open your browser and go to:
- **Main site**: `http://localhost:5000`
- **API endpoints**: `http://localhost:5000/api/contacts`, `http://localhost:5000/api/faqs`

## What You'll See

The website includes all 9 sections:
- Homepage with hero section
- How It Works page
- About Us page  
- Team page
- App Installation page
- Legal pages (Terms, Privacy, Refund)
- FAQ page with search
- Contact form (saves to memory)
- Navigation and footer

## Making Changes

### Editing Content
- **Pages**: Edit files in `client/src/pages/`
- **Components**: Edit files in `client/src/components/`
- **Styles**: Edit `client/src/index.css` for colors

### Adding New Pages
1. Create new file in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add navigation link in header

### Changing Colors
Edit the CSS variables in `client/src/index.css`:
```css
:root {
  --primary: 210 100% 50%;     /* Main blue */
  --secondary: 45 100% 85%;    /* Soft yellow */
  --accent: 210 40% 98%;       /* Light blue */
}
```

## File Structure You Need

```
your-project-folder/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── other config files
```

## Troubleshooting

### Port Already in Use
If port 5000 is busy, the server will automatically use a different port. Check the terminal output.

### Node Version Issues
Make sure you have Node.js 18 or higher:
```bash
node --version
```

### Dependencies Not Installing
Clear npm cache and try again:
```bash
npm cache clean --force
npm install
```

### Hot Reload Not Working
Restart the development server:
- Press `Ctrl+C` to stop
- Run `npm run dev` again

## Production Build

To create a production build:
```bash
npm run build
```

This creates optimized files in the `dist/` folder ready for deployment.

## Need Help?

Common issues:
- **Blank page**: Check browser console for errors
- **API not working**: Ensure backend is running on same port
- **Styles missing**: Check if Tailwind CSS loaded properly
- **Images not showing**: Placeholder images are used intentionally

The contact form saves data to memory (resets when server restarts). For permanent storage, you can upgrade to a database later.