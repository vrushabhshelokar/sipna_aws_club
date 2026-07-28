import React from 'react';

/**
 * Loading Component.
 * Lightweight spinner fallback displayed during route chunk loading via React.lazy & Suspense.
 * Specified in Architecture.md Section 11.
 */
function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center" aria-label="Loading page content">
      <div className="relative w-12 h-12 mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-orange-500/10 border-b-orange-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
        Loading...
      </span>
    </div>
  );
}

export default Loading;
