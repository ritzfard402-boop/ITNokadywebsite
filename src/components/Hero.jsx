import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import arrowIcon from "../assets/arrow.png";

export default function Hero({
  badge = "Международная IT-академия",
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
  buttonText = "Записаться на курс",
  buttonLink = "/enroll",
  icon = arrowIcon,
  rightContent = null,
}) {
  return (
    <section id="hero" className="container-page py-16 sm:py-20">
      <AnimatedSection
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        stagger={0.15}
      >
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
            to={buttonLink}
            className="inline-flex items-center justify-between bg-[#E31B23] text-white font-medium text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>{buttonText}</span>
            {icon && (
              <img
                src={icon}
                alt="arrow"
                className="w-5 h-5 object-contain ml-4"
              />
            )}
          </Link>
        </div>

        {/* Right side container */}
        {rightContent ? (
          rightContent
        ) : (
          <div className="w-[580px] h-[420px] bg-[#D9D9D9] rounded-xl shadow-inner max-w-full"></div>
        )}
      </AnimatedSection>
    </section>
  );
}