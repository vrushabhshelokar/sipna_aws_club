import React, { memo } from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component supporting router links, external links,
 * and button actions with standardized style variants.
 * Accessible with focus-visible states and aria-label prop support.
 * Memoized with React.memo for Phase 10 performance.
 */
function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon: Icon,
  external = false,
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed min-h-[40px]';

  const variants = {
    primary: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-semibold shadow-lg shadow-amber-500/20 active:scale-[0.98]',
    secondary: 'bg-slate-800/80 hover:bg-slate-700 text-slate-100 border border-slate-700/80 active:scale-[0.98]',
    outline: 'border border-amber-500/40 hover:border-amber-500 text-amber-400 hover:bg-amber-500/10 active:scale-[0.98]',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-[0.98]'
  };

  const sizes = {
    sm: 'px-3.5 py-2 text-xs gap-1.5 min-h-[36px]',
    md: 'px-5 py-2.5 text-sm gap-2 min-h-[44px]',
    lg: 'px-7 py-3.5 text-base gap-2.5 min-h-[48px]'
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}

export default memo(Button);
