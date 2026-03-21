'use client';

import { ArrowUp } from 'lucide-react';
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
      className={`${isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'} fixed right-4 bottom-16 z-50 flex size-10 items-center justify-center rounded-xl bg-slate-600 text-white shadow-xl transition-all hover:cursor-pointer hover:bg-slate-700 sm:right-6 sm:bottom-20 md:right-4 md:bottom-16 xl:right-8 xl:bottom-20 xl:size-12`}
    >
      <ArrowUp className="xl:size-8" />
    </button>
  );
};

export default ScrollToTopButton;
