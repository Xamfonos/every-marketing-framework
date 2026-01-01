# No Norm Co. - Marketing Roadmaps Platform

A Next.js platform for marketing education featuring interactive roadmaps, comprehensive frameworks, and AI-powered analysis.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
no-norm-platform/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Homepage
│   └── roadmaps/
│       └── growth-marketing/    # Growth Marketing roadmap page
│           └── page.tsx
├── components/                   # React components
│   ├── BackgroundEffects.tsx   # Animated background
│   ├── Footer.tsx              # Footer component
│   ├── Header.tsx              # Header/navigation
│   ├── RoadmapCard.tsx         # Roadmap card component
│   └── RoadmapVisualization.tsx # Interactive SVG roadmap
├── lib/                         # Utilities and data
│   ├── types.ts                # TypeScript types
│   └── roadmaps/
│       └── growth-marketing.ts # Roadmap data
├── public/                      # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Archivo (display), JetBrains Mono (code)

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Roadmaps

1. Create roadmap data file in `lib/roadmaps/[name].ts`:
   ```typescript
   import { RoadmapData } from '../types'
   
   export const yourRoadmap: RoadmapData = {
     slug: 'your-roadmap',
     title: 'Your Roadmap',
     // ... configure nodes and connections
   }
   ```

2. Create roadmap page in `app/roadmaps/[name]/page.tsx`

3. Import and use in homepage `app/page.tsx`

### Adding New Frameworks

1. Create framework content (MDX or component)
2. Add to framework library data
3. Link from roadmap nodes

## 🎯 Features

### Current

- ✅ Responsive homepage
- ✅ 8 role-based roadmap cards
- ✅ Interactive Growth Marketing roadmap
- ✅ SVG-based roadmap visualization
- ✅ Framework library preview
- ✅ Community stats section
- ✅ Dark theme with custom design

### Coming Soon

- ⏳ User authentication (Supabase)
- ⏳ Progress tracking
- ⏳ Framework pages
- ⏳ AI-powered analysis tool
- ⏳ Premium features
- ⏳ More roadmaps (7 additional)

## 🎨 Design System

### Colors

```css
Primary:    #0066FF (blue)
Accent:     #FF3366 (pink)
Dark:       #0A0E27 (background)
Surface:    #151933
Elevated:   #1F2344
Success:    #00E5A0 (green)
Warning:    #FFB800 (yellow)
```

### Typography

- **Display:** Archivo (headings, UI)
- **Monospace:** JetBrains Mono (code, stats)

### Spacing Scale

```
xs:  0.5rem  (8px)
sm:  1rem    (16px)
md:  1.5rem  (24px)
lg:  2rem    (32px)
xl:  3rem    (48px)
2xl: 4rem    (64px)
3xl: 6rem    (96px)
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/`

### Deployment Options

1. **Vercel** (recommended for Next.js):
   - Connect GitHub repository
   - Auto-deploys on push to main

2. **Netlify:**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Self-hosted:**
   ```bash
   npm run build
   npm run start
   ```

### Environment Variables

Create `.env.local` for environment variables:

```env
# Future: Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Future: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📝 Roadmap Data Structure

Roadmaps are defined with nodes and connections:

```typescript
{
  nodes: [
    {
      id: 'unique-id',
      title: 'Topic Name',
      subtitle: 'Optional subtitle',
      x: 100,        // SVG x position
      y: 200,        // SVG y position
      width: 300,    // SVG width
      height: 80,    // SVG height
      status: 'completed' | 'in-progress' | 'locked',
      description: 'Full description',
      whatYouLearn: ['Point 1', 'Point 2'],
      frameworks: [{ name: 'Framework', link: '/path' }],
      prerequisites: ['Previous Topic']
    }
  ],
  connections: [
    { from: 'node-id-1', to: 'node-id-2', completed: true }
  ]
}
```

## 🎓 Learning Path

Recommended order for understanding the codebase:

1. Start with `app/page.tsx` (homepage)
2. Review `components/RoadmapCard.tsx`
3. Explore `app/roadmaps/growth-marketing/page.tsx`
4. Study `components/RoadmapVisualization.tsx`
5. Examine `lib/roadmaps/growth-marketing.ts`

## 🤝 Contributing

Future: Guidelines for contributing will be added as the project grows.

## 📄 License

Proprietary - No Norm Co.

## 🆘 Troubleshooting

### Port 3000 already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Styling not applying

```bash
# Rebuild Tailwind
npm run dev
```

## 📞 Support

For issues or questions, contact: [your-email@example.com]

---

Built with ❤️ by No Norm Co.
