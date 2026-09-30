import React from 'react';
import Logo from '../assets/logo.png';

const DEFAULT_NAV_LINKS = [
  { name: 'Главная', href: '/' },
  { name: 'Курсы', href: '/courses' },
  { name: 'О нас', href: '/about' },
  { name: 'Для детей', href: '/kids' },
  { name: 'Для взрослых', href: '/adults' },
];

export default function Navbar({
  logoSrc = Logo,
  brandName = 'ITNOKADY',
  brandHref = '/',
  navLinks = DEFAULT_NAV_LINKS,
  contactText = 'Контакты',
  contactHref = '/contacts',
  ctaText = 'Записаться на курс',
  ctaHref = '/enroll',
  onCtaClick,
}) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white text-black shadow-md px-6 md:px-16 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href={brandHref} className="flex items-center gap-2.5">
          {logoSrc && (
            <img
              src={logoSrc}
              alt={`${brandName} Logo`}
              className="h-8 w-auto object-contain"
            />
          )}
          <span className="font-bold text-xl tracking-tight">{brandName}</span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative group block font-medium transition-colors hover:text-red-600 py-1"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls & CTA */}
        <div className="flex items-center gap-6">
          {contactText && (
            <a
              href={contactHref}
              className="hidden sm:inline-block relative group font-medium transition-colors hover:text-red-600 py-1"
            >
              {contactText}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          )}

          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="inline-flex items-center justify-center bg-[#E31B23] border border-transparent text-white font-medium px-6 py-2.5 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:text-[#E31B23] hover:border-gray-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            {ctaText}
          </a>
        </div>

      </div>
    </header>
  );
}