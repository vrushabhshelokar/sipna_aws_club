import React from 'react';

/**
 * Reusable layout container enforcing max-width grid alignment
 * and responsive horizontal padding across pages.
 */
function Container({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
