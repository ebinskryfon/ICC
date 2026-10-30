# Indywood Cricket Club (ICC) - Web Application

A responsive, modern web application built from the **ICC Website** Figma design (`sMqOa0L96P5CnypgTkN71j`), following the modular architecture of `employee360`.

---

## Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` design tokens
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: `clsx` + `tailwind-merge` (`cn` helper)
- **Design Tokens**:
  - **Colors**: Deep Midnight Navy (`#060D24`), Card Surface Slate (`#141A32` / `#181E36`), Mint Emerald Accent (`#4EDEA3`), KCL Trophy Gold (`#FFCE31`), Crimson (`#ED4C5C`).
  - **Typography**: `Poppins` (Google Fonts), `Patua One` (Google Fonts), `Inter`.
- **Assets**: 78 high-resolution image fills, brand logos (`logo-icc.png`, `logo-sailors.png`, `logo-vibebhav.png`), and gallery action shots.

---

## Directory Structure (Employee360 Architecture Pattern)

```
├── public/
│   ├── images/              # Downloaded Figma assets, logos, and gallery photography
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Container
│   │   └── ui/              # Button, Card, Badge, Modal, Input, Textarea
│   ├── features/            # Domain-driven feature modules
│   │   ├── home/            # Hero, AboutPreview, Offerings, AriesPartnership, VibeBhavBanner, Progression, Archives
│   │   ├── about/           # Foundation, vision, mission, strategic impact
│   │   ├── gallery/         # Filterable visual archives & lightbox modal
│   │   ├── join-icc/        # School affiliation application form + Frame 25 success modal
│   │   ├── vibe-bhav/       # Rules & regulations directives + player registration form
│   │   └── aries-sailors/   # KCL Champions showcase & grassroots pathway
│   ├── lib/
│   │   └── utils.ts         # cn utility
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces & domain types
│   ├── App.tsx              # Router setup with automatic scroll-to-top
│   ├── index.css            # Tailwind CSS v4 @theme tokens & glowing auras
│   └── main.tsx             # Application entry
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Pages & Routes

1. **Home (`/`)**:
   - Hero banner: *"Building The Next Generation Of Cricket"*
   - Partner badge: *"Official Grass Root Partner of Aries Kollam Sailors (KCL)"*
   - About ICC 3-pillar breakdown (*Build, Discover, Develop*)
   - 5 Offerings & Infrastructure cards
   - Aries Kollam Sailors alliance
   - Vibe-Bhav Sixes banner & state expansion
   - 4-step Player Progression Framework
   - Visual archives preview
2. **About Us (`/about`)**:
   - Foundation story, grassroots mandate, mission and vision.
3. **Gallery (`/gallery`)**:
   - Curated moments across Tournaments, Training Camps, School Clubs, and Vibe-Bhav with interactive lightbox zoom.
4. **Join ICC (`/join-icc`)**:
   - Institutional school partnership benefits, application form, and interactive confirmation modal (*Frame 25* from Figma).
5. **Vibe-Bhav Sixes Challenge (`/vibe-bhav`)**:
   - Tournament directives, super-over rules, ₹500 fee, and player registration form.
6. **Aries Kollam Sailors (`/aries-sailors`)**:
   - KCL Season 1 Champions spotlight and grassroots pathway.

---

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```
