# Architecture

# Sipna AWS Club Website (v1.0)

**Version:** 1.0

---

# 1. Architecture Overview

Sipna AWS Club is designed as a **fully static React application**. The application does not require a backend server, database, authentication system, or CMS.

All website content is stored inside the project source code and deployed as static assets through Vercel.

The architecture follows a **Single Source of Truth** approach, where all dynamic content (team members, events, club information) originates from centralized data files.

This makes the website:

- Fast
- Easy to maintain
- Highly reusable
- Scalable for future features
- Simple to deploy

---

# 2. High-Level Architecture

```
                 Visitor

                    │

                    ▼

             React Application

                    │

        React Router DOM Routing

         ┌──────────┴──────────┐

         ▼                     ▼

      Home Page            Team Page

                                │

                                ▼

                  Dynamic Member Route

                        /team/:slug

                                │

                                ▼

                 Team Data (Single Source)

                                │

                    Finds Matching Member

                                │

                                ▼

                  Reusable Member Profile
```

---

# 3. Application Flow

## Home Flow

```
User

↓

Home

↓

Hero

↓

About Club

↓

Mission

↓

Vision

↓

Benefits

↓

Upcoming Events

↓

Footer
```

---

## Team Flow

```
User

↓

Team Page

↓

Core Team

↓

Team Members

↓

Click Card

↓

Navigate

↓

/team/:slug

↓

Load Member

↓

Display Profile

↓

Other Team Members

↓

Footer
```

---

## Member Profile Flow

```
Open

/team/vrushabh

↓

Read URL Slug

↓

Find Matching Member

↓

Member Found

↓

Render Profile

↓

Render Social Links

↓

Render Related Members

↓

Back To Team
```

---

# 4. Routing Architecture

The application uses React Router.

Routes:

```
/
```

Home

---

```
/team
```

Team Listing

---

```
/team/:slug
```

Dynamic Member Page

---

Unknown routes redirect to a 404 page (optional for V1).

---

# 5. Data Architecture

The project follows a centralized data model.

```
React Components

        │

        ▼

Data Layer

        │

 ┌──────┴─────────┐

 ▼                ▼

team.js        events.js

        │

        ▼

Reusable Components
```

No component stores hardcoded member information.

Instead, every component consumes centralized data.

---

# 6. Single Source of Truth

All team information exists in one location.

Example flow:

```
team.js

↓

Team Page

↓

Member Card

↓

Member Profile

↓

Related Members
```

Updating one file automatically updates the entire website.

---

# 7. Team Data Model

Every member follows the same object structure.

Example fields:

```
id

slug

category

name

position

department

year

image

linkedin

github

instagram
```

Category is used for grouping.

Examples:

```
core

member
```

Role remains independent.

Examples:

```
Chairperson

Vice Chair

Technical Lead

Designer
```

---

# 8. Event Data Model

Events are stored separately.

Each event contains:

```
id

title

date

description
```

The Home page reads directly from this data file.

---

# 9. Component Architecture

```
App

├── Navbar
│
├── Routes
│
│   ├── Home
│   │
│   │   ├── Hero
│   │   ├── About
│   │   ├── Mission
│   │   ├── Vision
│   │   ├── Benefits
│   │   ├── Timeline
│   │   └── Footer
│   │
│   ├── Team
│   │
│   │   ├── SectionTitle
│   │   ├── TeamGrid
│   │   ├── TeamCard
│   │   └── Footer
│   │
│   └── MemberProfile
│
│       ├── BackButton
│       ├── ProfileCard
│       ├── SocialLinks
│       ├── RelatedMembers
│       └── Footer
│
└── Shared Components
```

---

# 10. Component Reusability

The architecture emphasizes reusable components.

Examples:

```
Button

SectionTitle

Container

SocialLinks

Footer

Navbar

TeamCard

ProfileCard
```

No duplicate UI should exist.

---

# 11. Folder Structure

```
sipna-aws-club/

│

├── public/
│
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og-image.png
│
├── src/
│
│   ├── assets/
│   │
│   │   ├── images/
│   │   │
│   │   ├── team/
│   │   ├── events/
│   │   ├── club/
│   │   └── icons/
│   │
│   └── fonts/
│
│
├── components/
│
│   ├── common/
│   │
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── SocialLinks.jsx
│   │   └── Loading.jsx
│   │
│   ├── layout/
│   │
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── home/
│   │
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Mission.jsx
│   │   ├── Vision.jsx
│   │   ├── Benefits.jsx
│   │   └── Timeline.jsx
│   │
│   ├── team/
│   │
│   │   ├── TeamGrid.jsx
│   │   ├── TeamCard.jsx
│   │   ├── TeamSection.jsx
│   │   └── MemberProfile.jsx
│   │
│   └── seo/
│
│       └── SEO.jsx
│
├── pages/
│
│   ├── Home.jsx
│   ├── Team.jsx
│   ├── TeamMember.jsx
│   └── NotFound.jsx
│
├── data/
│
│   ├── team.js
│   ├── events.js
│   └── site.js
│
├── hooks/
│
│   └── useScrollAnimation.js
│
├── utils/
│
│   ├── helpers.js
│   └── constants.js
│
├── styles/
│
│   ├── globals.css
│   └── animations.css
│
├── App.jsx
├── main.jsx
└── vite.config.js
```

---

# 12. Image Architecture

Images are stored locally.

```
assets/

↓

images/

↓

team/

↓

vrushabh.webp
```

Each team member references its image through the centralized data file.

---

# 13. State Management

No global state library is required.

The application primarily uses:

- React Props
- React Hooks
- Local component state

No Redux.

No Zustand.

No Context API is required for Version 1.

---

# 14. Navigation Architecture

```
Navbar

↓

Home

↓

Team

↓

Member Profile

↓

Back To Team
```

Navigation remains intentionally minimal.

---

# 15. SEO Architecture

Each page generates unique metadata.

## Home

```
Title

Sipna AWS Club | Official Website
```

---

## Team

```
Title

Team | Sipna AWS Club
```

---

## Member

Dynamic

```
Vrushabh | Sipna AWS Club
```

Every member page generates metadata using the member information.

---

# 16. Animation Architecture

Animations use Framer Motion.

Animation principles:

- Purposeful
- Lightweight
- Consistent

Recommended animation areas:

- Hero reveal
- Section fade-in
- Team card entrance
- Hover interactions
- Profile page transitions
- Button micro-interactions

Heavy continuous animations are intentionally avoided.

---

# 17. Responsive Architecture

The layout follows a mobile-first approach.

Supported breakpoints:

```
Mobile

↓

Tablet

↓

Laptop

↓

Desktop
```

All components should adapt naturally using Tailwind CSS responsive utilities.

---

# 18. Error Handling

## Invalid Member URL

Example:

```
/team/random-user
```

Flow:

```
Read Slug

↓

Search team.js

↓

No Match

↓

Render NotFound Page
```

---

## Missing Images

If an image is unavailable:

- Display a default placeholder profile image.
- Prevent layout shifts.

---

# 19. Technology Stack

## Frontend

- React
- JavaScript
- Vite

---

## Styling

- Tailwind CSS

---

## Animation

- Framer Motion

---

## Routing

- React Router DOM

---

## Icons

- React Icons

---

## Fonts

- Google Fonts (or locally hosted fonts if required)

---

## Image Format

Preferred:

- WebP

Fallback:

- PNG
- SVG (icons/logos)

---

## Deployment

- Vercel

---

## Version Control

- Git
- GitHub

---

# 20. Build Pipeline

```
Developer

↓

Git Commit

↓

GitHub Repository

↓

Vercel

↓

Automatic Build

↓

Static Deployment

↓

Live Website
```

---

# 21. Future Scalability

The architecture is designed so new features can be introduced without major refactoring.

Potential future modules:

- Event Registration
- Admin Dashboard
- Gallery
- Blog
- Contact Form
- Achievement Section
- Alumni Directory
- Dynamic Event Management
- CMS Integration
- Backend APIs

These modules can be added as independent features while preserving the existing architecture.