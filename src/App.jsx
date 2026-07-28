import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loading from './components/common/Loading';

// Lazy-loaded page routes for optimal code splitting & performance
const Home = lazy(() => import('./pages/Home'));
const Team = lazy(() => import('./pages/Team'));
const TeamMember = lazy(() => import('./pages/TeamMember'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Main Application Component.
 * Integrates React Router DOM routing, sticky Navbar, dynamic main view, and global Footer.
 * Optimized with React.lazy and Suspense route-level code splitting for Phase 10 performance.
 */
function App() {
  return (
    <BrowserRouter>
      {/* Skip to Main Content Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-amber-500 focus:text-slate-950 focus:rounded-xl focus:font-bold focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-950"
      >
        Skip to main content
      </a>

      <div className="flex flex-col min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
        <Navbar />
        <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/:slug" element={<TeamMember />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
