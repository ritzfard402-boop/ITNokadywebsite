import React from 'react';
import Logo_footer from '../assets/Logo_footer.png';
import locationIcon from '../assets/location_on (1).png';
import callIcon from '../assets/call.png';
import mailIcon from '../assets/mail.png';

const DEFAULT_NAV_LINKS = [
  { name: 'Главная', href: '/' },
  { name: 'Курсы', href: '/courses' },
  { name: 'О нас', href: '/about' },
  { name: 'Для детей', href: '/kids' },
  { name: 'Для взрослых', href: '/adults' },
];

const DEFAULT_COURSES = [
  'Python',
  'C++',
  'C#',
  'JavaScript',
  'Дизайн',
  'Разработка игр',
  'Компьютерная грамотность',
  'Нейросети для HR',
  'Системное администрирование',
  'Front-end',
  'Java',
];

const DEFAULT_PHONES = ['+993 (63) 47-11-92', '+993 (63) 42-67-51'];

export default function Footer({
  logoSrc = Logo_footer,
  brandName = 'ITNOKADY',
  description = (
    <>
      IT-академия нового поколения. <br />
      Обучаем востребованным <br />
      профессиям и помогаем <br />
      начать в IT.
    </>
  ),
  navTitle = 'Навигация',
  navLinks = DEFAULT_NAV_LINKS,
  coursesTitle = 'Курсы',
  courses = DEFAULT_COURSES,
  contactsTitle = 'Контакты',
  address = 'г. Ашхабад, Беркарар БЦ, 1-й этаж',
  phones = DEFAULT_PHONES,
  instagram = '@itnokady',
  instagramUrl = 'https://instagram.com/itnokady',
  icons = {
    location: locationIcon,
    call: callIcon,
    mail: mailIcon,
  },
}) {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {logoSrc && (
              <img
                src={logoSrc}
                alt={`${brandName} Logo`}
                className="h-8 w-auto object-contain"
              />
            )}
            <p className="font-bold text-red-500 text-3xl">{brandName}</p>
          </div>
          {description && (
            <p className="text-sm leading-relaxed text-gray-400">
              {description}
            </p>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col text-xl">
          <h2 className="text-red-500 font-bold text-4xl mb-2">{navTitle}</h2>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group w-max transition-colors hover:text-white py-1"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Courses Section */}
        <nav className="flex flex-col gap-2 text-xl">
          <h2 className="text-red-500 font-bold text-4xl mb-2">{coursesTitle}</h2>
          {courses.map((course) => (
            <a
              key={course}
              href="/courses"
              className="relative group w-max transition-colors hover:text-white py-1"
            >
              {course}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Contacts Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-red-500 font-bold text-4xl mb-2">{contactsTitle}</h2>
          <ul className="space-y-4 text-xl text-gray-300">
            {address && (
              <li className="flex items-start gap-3">
                {icons.location && (
                  <img
                    src={icons.location}
                    alt="Location"
                    className="w-[30px] h-[30px] object-contain shrink-0 mt-1"
                  />
                )}
                <span>{address}</span>
              </li>
            )}

            {phones.length > 0 && (
              <li className="flex items-start gap-3">
                {icons.call && (
                  <img
                    src={icons.call}
                    alt="Phone"
                    className="w-[30px] h-[30px] object-contain shrink-0 mt-1"
                  />
                )}
                <div className="flex flex-col gap-1">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                      className="hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
            )}

            {instagram && (
              <li className="flex items-center gap-3">
                {icons.mail && (
                  <img
                    src={icons.mail}
                    alt="Mail"
                    className="w-[30px] h-[30px] object-contain shrink-0"
                  />
                )}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {instagram}
                </a>
              </li>
            )}
          </ul>
        </div>

      </div>
    </footer>
  );
}