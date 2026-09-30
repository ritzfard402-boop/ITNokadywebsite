import React from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow.png';
import robotImg from '../assets/Robot.png';
import locationIcon from '../assets/location_on (1).png';

const DEFAULT_CONTACT_CARDS = [
  {
    title: 'Адрес',
    text: (
      <>
        г.Ашхабад ул. Ататюрк,<br />
        Беркарар БЦ 1 этаж
      </>
    ),
  },
  {
    title: 'Телефон',
    text: (
      <>
        +993 (63) 47-11-92<br />
        +993 (63) 42-67-51
      </>
    ),
  },
  {
    title: 'Instagram',
    text: 'it_education_academy',
  },
  {
    title: 'Tiktok',
    text: 'it nokady',
  },
];

export default function Contacts({
  badge = 'Международная IT-академия',
  title = (
    <>
      СВЯЖИТЕСЬ<br />С НАМИ
    </>
  ),
  description = (
    <>
      Мы всегда рады ответить на ваши<br />
      вопросы и помочь с выбором курса.
    </>
  ),
  ctaText = 'Записаться на курс',
  ctaHref = '/enroll',
  arrow = arrowIcon,
  rightHeroContent = null,
  contactCards = DEFAULT_CONTACT_CARDS,
  cardIcon = locationIcon,
  robotImage = robotImg,
  showRobot = true,
}) {
  return (
    <div className="w-full bg-white font-['Roboto']">
      
      {/* Hero Section */}
      <section className="w-full pl-[82px] pr-[78px] pt-16 pb-28 flex justify-between items-center min-h-[calc(100vh-120px)]">
        <div className="max-w-xl">
          {badge && (
            <span className="text-sm font-bold text-black uppercase tracking-wider block mb-4">
              {badge}
            </span>
          )}
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#E31B23] leading-[1.1] mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-black text-base md:text-lg font-normal leading-relaxed mb-8">
              {description}
            </p>
          )}

          <Link
            to={ctaHref}
            className="inline-flex items-center justify-between bg-[#E31B23] text-white font-medium text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>{ctaText}</span>
            {arrow && (
              <img src={arrow} alt="arrow" className="w-5 h-5 object-contain ml-4" />
            )}
          </Link>
        </div>

        {/* Right side container */}
        {rightHeroContent ? (
          rightHeroContent
        ) : (
          <div className="w-[580px] h-[420px] bg-[#D9D9D9] rounded-xl shadow-inner max-w-full"></div>
        )}
      </section>

      {/* Cards & Mascot Section */}
      <section className="w-full pl-[82px] pr-[78px] pt-20 pb-24 bg-white">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactCards.map((card, idx) => (
            <div
              key={card.id || idx}
              className="bg-[#FAF2EE] p-6 rounded-2xl shadow-md border border-[#F2E3DC]"
            >
              <div className="flex items-center gap-2 text-[#E31B23] font-bold text-lg mb-3">
                {cardIcon && (
                  <img src={cardIcon} alt="Pin" className="w-5 h-5 object-contain" />
                )}
                <span>{card.title}</span>
              </div>
              <p className="text-black text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Robot Mascot */}
        {showRobot && robotImage && (
          <div className="flex justify-center">
            <img 
              src={robotImage} 
              alt="Robot Mascot" 
              style={{ width: '200px', height: 'auto' }}
              className="object-contain" 
            />
          </div>
        )}

      </section>

    </div>
  );
}