import Hero from "../components/Hero";
import CoursesOrbit from "../sections/CoursesOrbit/CoursesOrbit";
import WhyUs from "../sections/WhyUs/WhyUs";
import Stats from "../sections/Stats/Stats";
import Testimonials from "../sections/Testimonials/Testimonials";
import ContactForm from "../sections/ContactForm/ContactForm";
import { RobotAnchorProvider } from "../components/Robot/RobotAnchorProvider";
export default function Home() {
    return (
    <RobotAnchorProvider>
      <Hero />
      <CoursesOrbit />
      <WhyUs />
      <Stats />
      <Testimonials />
      <ContactForm />
    </RobotAnchorProvider>
    );
}

{/* 
import React from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow.png';
import robotImg from '../assets/Robot.png';
import locationIcon from '../assets/location_on (1).png';

export default function Home() {
  return (
    <div className="w-full bg-white font-['Roboto']">
      
      <section className="w-full px-6 md:px-[80px] pt-16 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold text-black uppercase tracking-wider block mb-4">
            Международная IT-академия
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#E31B23] leading-[1.1] mb-6">
            СВЯЖИТЕСЬ<br />С НАМИ
          </h1>
          
          <p className="text-black text-base md:text-lg font-normal leading-relaxed mb-8">
            Мы всегда рады ответить на ваши<br />
            вопросы и помочь с выбором курса.
          </p>

          <div>
            <Link
              to="/enroll"
              className="inline-flex items-center justify-between bg-[#E31B23] text-white font-medium text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Записаться на курс</span>
              <img src={arrowIcon} alt="arrow" className="w-5 h-5 object-contain ml-4" />
            </Link>
          </div>
        </div>

        Правый серый блок 
        <div className="w-full h-[350px] md:h-[420px] bg-[#D9D9D9] rounded-xl shadow-inner"></div>
      </section>

      <section className="w-full px-6 md:px-[80px] pt-20 pb-24 bg-white">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          
          {/* Адрес 
          <div className="bg-[#FAF2EE] p-6 rounded-2xl shadow-md border border-[#F2E3DC]">
            <div className="flex items-center gap-2 text-[#E31B23] font-bold text-lg mb-3">
              <img src={locationIcon} alt="Pin" className="w-5 h-5 object-contain" />
              <span>Адрес</span>
            </div>
            <p className="text-black text-sm leading-relaxed">
              г.Ашхабад ул. Ататюрк,<br />Беркарар БЦ 1 этаж
            </p>
          </div>

          {/* Телефон 
          <div className="bg-[#FAF2EE] p-6 rounded-2xl shadow-md border border-[#F2E3DC]">
            <div className="flex items-center gap-2 text-[#E31B23] font-bold text-lg mb-3">
              <img src={locationIcon} alt="Pin" className="w-5 h-5 object-contain" />
              <span>Телефон</span>
            </div>
            <p className="text-black text-sm leading-relaxed">
              +993 (63) 47-11-92<br />
              +993 (63) 42-67-51
            </p>
          </div>

      
          <div className="bg-[#FAF2EE] p-6 rounded-2xl shadow-md border border-[#F2E3DC]">
            <div className="flex items-center gap-2 text-[#E31B23] font-bold text-lg mb-3">
              <img src={locationIcon} alt="Pin" className="w-5 h-5 object-contain" />
              <span>Instagram</span>
            </div>
            <p className="text-black text-sm leading-relaxed pt-1">
              it_education_academy
            </p>
          </div>

 
          <div className="bg-[#FAF2EE] p-6 rounded-2xl shadow-md border border-[#F2E3DC]">
            <div className="flex items-center gap-2 text-[#E31B23] font-bold text-lg mb-3">
              <img src={locationIcon} alt="Pin" className="w-5 h-5 object-contain" />
              <span>Tiktok</span>
            </div>
            <p className="text-black text-sm leading-relaxed pt-1">
              it nokady
            </p>
          </div>

        </div>


        <div className="flex justify-center">
          <img 
            src={robotImg} 
            alt="Robot Footer" 
            style={{ width: '200px', height: 'auto' }}
            className="object-contain" 
          />
        </div>

      </section>

    </div>
  );
}
*/}