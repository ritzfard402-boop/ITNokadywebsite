import { useState } from 'react';
import robotImg from '../assets/Robot.png';

const DEFAULT_COURSES = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'python', label: 'Python' },
  { value: 'ux', label: 'UI/UX Design' },
];

export default function Enroll({
  eyebrow = 'ЗАПИСАТЬСЯ НА КУРС',
  title = 'Оставить заявку',
  subtext = 'Мы свяжемся с вами в ближайшее время!',
  courses = DEFAULT_COURSES,
  buttonText = 'Отправить заявку',
  robotImage = robotImg,
  showRobot = true,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full bg-white font-['Roboto'] min-h-[calc(100vh-140px)] flex flex-col justify-start py-16 sm:py-24 md:py-32">
      <div className="w-full px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          {eyebrow && (
            <span className="text-[#E31B23] text-sm font-bold uppercase tracking-wider block mb-2">
              {eyebrow}
            </span>
          )}
          {title && (
            <h1 className="text-4xl md:text-5xl font-extrabold text-black">
              {title}
            </h1>
          )}
        </div>

        {/* Robot and Form Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Mascot Image */}
          {showRobot && robotImage && (
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={robotImage} 
                alt="Mascot" 
                style={{ width: '241px', height: '268px' }}
                className="object-contain" 
              />
            </div>
          )}

          {/* Form */}
          <div className="w-full md:w-1/2 max-w-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#E31B23] transition"
                  required
                />
              </div>

              <div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Телефон" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#E31B23] transition"
                  required
                />
              </div>

              <div>
                <select 
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#E31B23] transition ${
                    formData.course ? 'text-black' : 'text-gray-400'
                  }`}
                  required
                >
                  <option value="" disabled>Выберите курс</option>
                  {courses.map((c) => (
                    <option 
                      key={typeof c === 'string' ? c : c.value} 
                      value={typeof c === 'string' ? c : c.value}
                      className="text-black"
                    >
                      {typeof c === 'string' ? c : c.label}
                    </option>
                  ))}
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#E31B23] text-white font-medium py-3.5 rounded-lg hover:bg-red-700 transition shadow-md mt-2 active:scale-[0.99]"
              >
                {buttonText}
              </button>
            </form>

            {subtext && (
              <p className="text-center text-black text-sm font-medium mt-4">
                {subtext}
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}