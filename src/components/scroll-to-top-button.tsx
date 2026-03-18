'use client';

import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setIsVisible(scrollY > 300);
    }

    addEventListener('scroll', toggleVisibility);
    return () => removeEventListener('scroll', toggleVisibility);
  }, []);

  function scrollToTop() {
    scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`${isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'} fixed right-4 bottom-24 z-50 flex size-12 items-center justify-center rounded-xl bg-slate-600 text-white shadow-xl transition-all hover:cursor-pointer hover:bg-slate-700 sm:right-8 sm:bottom-8`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
