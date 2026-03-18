'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../i18n/navigation';
import { BookOpenText, Contact, Microscope, ScrollText } from 'lucide-react';

// This component is only visible in sm (640px) resolution
// For xs (380px) see LinksNavbar component in this same file
const LinksNavbar = ({ version }: { version: 'header' | 'bottom' }) => {
  const t = useTranslations();
  const pathname = usePathname();

  const availableLinks = [
    { icon: <ScrollText />, label: t('LinksNavbar.vitae'), href: '/' },
    { icon: <Microscope />, label: t('LinksNavbar.projects'), href: '/projects' },
    { icon: <BookOpenText />, label: t('LinksNavbar.publications'), href: '/publications' },
    { icon: <Contact />, label: t('LinksNavbar.contact'), href: '/contact' }
  ];

  switch (version) {
    // Only visible on sm (640px) or greater
    // For md (768px) - lg (1024px): Minified version
    // For xl (1280px) or greater: Full version
    case 'header':
      return (
        <nav className="hidden w-full overflow-hidden bg-slate-100 shadow-sm md:flex xl:w-auto xl:rounded-xl">
          {availableLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? 'bg-slate-300' : ''} flex-1 border-x border-slate-300 py-1 text-center font-bold uppercase transition-colors first:border-l-0 last:border-r-0 hover:bg-slate-200 xl:px-4 xl:text-base`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      );

    // Only visible on xs (380px)
    case 'bottom':
      return (
        <nav className="fixed bottom-0 flex w-full border-t border-slate-300 bg-slate-100 shadow-sm md:hidden">
          {availableLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? 'bg-slate-300' : ''} flex flex-1 flex-col items-center gap-1 px-2 py-1 text-center text-xs font-semibold uppercase transition-colors first:border-l-0 last:border-r-0 hover:bg-slate-200`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      );
  }
};

export default LinksNavbar;
