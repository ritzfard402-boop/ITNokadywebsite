import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import RobotAnchor from "../../components/Robot/RobotAnchor";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import Button from "../../components/Button/Button";
import { FOOTER_COURSE_LINKS } from "../../constants/navigation";
import { useContactForm } from "../../hooks/useContactForm";

export default function ContactForm() {
  const { values, updateField, handleSubmit, status } = useContactForm();

  return (
    <section 
      id="contact" 
      className="w-full bg-white font-['Roboto'] min-h-[calc(100vh-140px)] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto"
    >
      {/* Outer 1-Column Page Grid for Title and Content */}
      <div className="grid grid-cols-1 gap-8 sm:gap-12 w-full">
        
        {/* Animated Title Header */}
        <AnimatedSection className="text-center" y={16}>
          <SectionTitle 
            eyebrow="ЗАПИСАТЬСЯ НА КУРС" 
            title="Оставить заявку" 
            align="center"
          />
        </AnimatedSection>

        {/* 2-Column Responsive Inner Grid (Robot + Form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-5xl mx-auto w-full">
          
          {/* Column 1: Animated Robot Anchor */}
          <AnimatedSection className="w-full flex justify-center" y={16}>
            <RobotAnchor
              id="contact"
              pose="neutral"
              className="w-[180px] h-[200px] sm:w-[241px] sm:h-[268px] object-contain"
            />
          </AnimatedSection>

          {/* Column 2: Animated Form */}
          <AnimatedSection className="w-full max-w-md mx-auto md:mx-0" y={24}>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit} noValidate>
              <div>
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  value={values.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full px-4 py-3 sm:py-3.5 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#E31B23] transition"
                  required
                />
              </div>

              <div>
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  value={values.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full px-4 py-3 sm:py-3.5 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#E31B23] transition"
                  required
                />
              </div>

              <div>
                <select 
                  value={values.course}
                  onChange={(e) => updateField("course", e.target.value)}
                  className={`w-full px-4 py-3 sm:py-3.5 bg-white border border-gray-300 rounded-lg transition ${
                    values.course ? "text-black" : "text-gray-400"
                  } focus:outline-none focus:border-[#E31B23]`}
                >
                  <option value="">Выберите курс</option>
                  {FOOTER_COURSE_LINKS.map((course) => (
                    <option key={course} value={course} className="text-black">
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#E31B23] text-white font-medium py-3.5 rounded-lg hover:bg-red-700 transition shadow-md mt-2"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Отправляем..." : "Отправить заявку"}
              </Button>

              {/* Dynamic Feedback Messages */}
              {status === "success" && (
                <p className="text-center text-sm font-medium mt-2 text-green-600">
                  Заявка отправлена! Мы скоро свяжемся с вами.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm font-medium mt-2 text-[#E31B23]">
                  Не удалось отправить заявку. Попробуйте еще раз.
                </p>
              )}
              {status === "idle" && (
                <p className="text-center text-black text-sm font-medium mt-2">
                  Мы свяжемся с вами в ближайшее время!
                </p>
              )}
            </form>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}