import React, { memo } from 'react';

/**
 * Standardized section title component with optional badge pill,
 * heading, and subtitle description.
 * Supports customizable heading levels (as="h1" | "h2" | "h3") for strict accessibility heading hierarchy.
 * Memoized with React.memo for Phase 10 performance.
 */
function SectionTitle({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
  as: HeadingTag = 'h2'
}) {
  return (
    <div className={`mb-8 sm:mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3 sm:mb-4 ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true"></span>
          {badge}
        </div>
      )}
      
      {title && (
        <HeadingTag className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-100 tracking-tight leading-tight sm:leading-none">
          {title}
        </HeadingTag>
      )}

      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default memo(SectionTitle);
