# Rules

# Sipna AWS Club Website (v1.0)

**Version:** 1.0

This document defines the development rules, implementation constraints, coding standards, and project boundaries for the Sipna AWS Club Website. Every implementation should follow these rules unless explicitly changed in future versions.

---

# 1. Core Principles

The project must always prioritize:

- Simplicity over complexity.
- Reusability over duplication.
- Performance over unnecessary visual effects.
- Maintainability over shortcuts.
- Readability over clever code.
- Consistency across the entire project.

Every implementation decision should support these principles.

---

# 2. Project Boundaries

Version 1 is intentionally limited in scope.

Only the following features are included:

- Home page
- Team page
- Dynamic member profile pages
- Upcoming events
- Responsive layout
- SEO essentials

Everything outside this scope should be considered out of scope unless specifically approved.

---

# 3. Core Technical Constraints

## Static Website

The website must remain fully static.

No backend.

No database.

No API server.

No authentication.

No runtime content management.

---

## Content Source

All website content must come from local project files.

No remote APIs.

No CMS.

No Firebase.

No Supabase.

No cloud databases.

---

## Deployment

Deployment target is:

- Vercel

The project should always remain deployable as a static application.

---

## Routing

All routing must use React Router.

Dynamic member pages must use route parameters.

Example:

```
/team/:slug
```

No manually created profile pages.

---

# 4. Single Source of Truth

All reusable data must exist in centralized data files.

Examples:

- Team members
- Events
- Site information

Components must never contain duplicated hardcoded data.

Updating one data file should automatically update every page that consumes it.

---

# 5. Component Rules

Every UI element that appears more than once should become a reusable component.

Examples:

- Button
- Footer
- Navbar
- Social links
- Team card
- Profile card
- Section title

Avoid duplicated JSX.

Avoid copy-paste components.

---

# 6. Data Rules

Every member object must follow the same schema.

Required fields:

- id
- slug
- category
- name
- position
- department
- year
- image
- linkedin
- github
- instagram

No inconsistent structures.

No optional property names for identical data.

---

# 7. File Organization Rules

Files must remain organized by responsibility.

Examples:

- Components belong inside components/.
- Data belongs inside data/.
- Pages belong inside pages/.
- Images belong inside assets/.

Do not mix unrelated responsibilities.

---

# 8. Styling Rules

Use Tailwind CSS for all styling.

Avoid inline styles unless absolutely necessary.

Maintain consistent spacing, typography, and color usage throughout the project.

Prefer utility classes over custom CSS whenever practical.

Custom CSS should only be used for:

- Global styles
- Animation helpers
- Browser-specific fixes

---

# 9. Animation Rules

Animations should enhance the user experience.

Never distract users.

Allowed:

- Fade
- Slide
- Scale
- Hover interactions
- Staggered reveals

Avoid:

- Infinite animations
- Flashing effects
- Excessive parallax
- Heavy particle systems
- Unnecessary motion

Performance always takes priority.

---

# 10. Responsive Rules

Every page must support:

- Mobile
- Tablet
- Laptop
- Desktop

No layout should rely on fixed widths.

Use responsive Tailwind utilities.

Test every major section on multiple viewport sizes.

---

# 11. Accessibility Rules

Every implementation should follow accessibility best practices.

Requirements include:

- Semantic HTML
- Keyboard navigation
- Alt text for images
- Proper heading hierarchy
- Focus visibility
- Accessible button labels
- Sufficient color contrast

Accessibility must not be treated as an optional enhancement.

---

# 12. SEO Rules

Every page should include meaningful metadata.

Requirements:

- Unique page title
- Meta description
- Open Graph metadata
- Clean URLs
- Semantic HTML
- Sitemap
- robots.txt

Member profile pages must generate metadata dynamically using the selected member's information.

---

# 13. Image Rules

Preferred image format:

- WebP

Fallbacks:

- PNG
- SVG (logos/icons)

Images should be optimized before adding them to the repository.

Avoid unnecessarily large assets.

Provide a placeholder image when a profile image is unavailable.

---

# 14. Navigation Rules

Primary navigation should remain minimal.

Only:

- Home
- Team

Member pages are accessed through team cards.

Avoid adding unnecessary navigation items during Version 1.

---

# 15. URL Rules

All URLs should remain clean and human-readable.

Examples:

```
/
```

```
/team
```

```
/team/vrushabh
```

Avoid query-string based navigation for member profiles.

---

# 16. Error Handling Rules

The application should fail gracefully.

Examples include:

- Invalid member slug
- Missing images
- Empty event list
- Broken social links

Errors should never crash the application.

Provide sensible fallbacks whenever possible.

---

# 17. Invalid Member Handling

If a requested member does not exist:

Flow:

```
Read URL

↓

Search Team Data

↓

No Match

↓

Render Not Found Page
```

Never leave the user with a blank screen.

---

# 18. Social Link Rules

Only display a social icon if a valid URL exists.

Do not render empty buttons.

Do not display placeholder links in production.

---

# 19. Team Data Rules

Categories and positions must remain independent.

Correct:

```
Category

Core Team

Team Member
```

```
Position

Chairperson

Vice Chair

Technical Lead

Designer
```

Do not merge these concepts.

---

# 20. Event Rules

Upcoming events should be stored separately from team data.

Events should remain simple.

Each event contains:

- Title
- Date
- Description

Avoid building unnecessary event management logic.

---

# 21. Performance Rules

Always prioritize performance.

Guidelines:

- Optimize images.
- Lazy load large assets when appropriate.
- Minimize JavaScript.
- Reduce unnecessary re-renders.
- Keep bundle size small.
- Avoid heavy animation libraries beyond Framer Motion.

The website should feel fast on average mobile devices.

---

# 22. State Management Rules

Version 1 should avoid unnecessary state management.

Use:

- Props
- Local state
- React hooks

Do not introduce Redux, Zustand, MobX, or Context API without a clear requirement.

---

# 23. Dependency Rules

Every dependency must have a clear purpose.

Avoid adding packages that duplicate existing functionality.

Do not install libraries "just in case."

Keep the dependency list lean.

---

# 24. Code Quality Rules

Code should be:

- Readable
- Modular
- Predictable
- Reusable

Avoid:

- Deeply nested logic
- Large monolithic components
- Magic numbers
- Repeated code
- Unused variables
- Dead code

---

# 25. Naming Conventions

Use clear, descriptive names.

Examples:

Good:

```
TeamCard.jsx
```

```
MemberProfile.jsx
```

```
events.js
```

Avoid vague names.

Examples:

```
Card2.jsx
```

```
test.js
```

```
newfile.jsx
```

---

# 26. Folder Rules

Every folder should have a single responsibility.

Do not place unrelated files together.

Example:

```
components/

home/

team/

layout/

common/
```

Avoid dumping every component into a single directory.

---

# 27. Reusability Rules

Before creating a new component, ask:

- Does something similar already exist?
- Can an existing component be extended?
- Can this logic be extracted into a reusable utility?

Avoid duplication.

---

# 28. AI Interaction Rules

When using AI to generate or modify code:

The AI must:

- Read the relevant project files before making changes.
- Preserve the established folder structure.
- Respect the centralized data model.
- Reuse existing components whenever possible.
- Avoid introducing unnecessary dependencies.
- Follow the project's naming conventions.
- Keep implementations within the Version 1 scope.
- Prefer small, focused changes over broad rewrites.
- Maintain consistency with existing code style.

The AI must not:

- Rewrite unrelated files.
- Change the project architecture without explicit approval.
- Introduce a backend or database.
- Replace reusable components with duplicated code.
- Modify routing patterns without approval.
- Break existing functionality to implement new features.

---

# 29. Universal "What to Do"

Always:

- Keep components reusable.
- Keep data centralized.
- Keep routing dynamic.
- Write clean and maintainable code.
- Optimize images.
- Maintain responsive layouts.
- Use semantic HTML.
- Validate dynamic routes.
- Handle missing data gracefully.
- Maintain visual consistency.
- Optimize for performance.
- Follow established project conventions.

---

# 30. Universal "What to Avoid"

Never:

- Duplicate UI components.
- Duplicate team data.
- Hardcode member information inside components.
- Add unnecessary packages.
- Overcomplicate simple features.
- Create manually duplicated profile pages.
- Ignore responsive behavior.
- Ignore accessibility.
- Ignore SEO requirements.
- Commit unused assets.
- Leave commented-out production code.
- Introduce backend functionality into Version 1.

---

# 31. Future Compatibility Rules

Every implementation should support future expansion without requiring major refactoring.

Future features should be added as independent modules rather than rewriting existing code.

Examples include:

- Event registration
- Admin dashboard
- Gallery
- Blog
- Contact forms
- Alumni showcase
- Achievement pages

Version 1 should provide a stable foundation for these additions while remaining lightweight and easy to maintain.