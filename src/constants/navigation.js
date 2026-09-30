// Пока сайт — одна страница (лендинг), поэтому пункты меню
// являются якорными ссылками на секции. Когда появятся
// отдельные роуты (/courses, /about и т.д.), здесь достаточно
// заменить href на "/courses" и т.п. — компоненты Header/Footer
// менять не придётся.
export const NAV_LINKS = [
    { label: "Главная", href: "#hero" },
    { label: "Курсы", href: "#courses" },
    { label: "О нас", href: "#why-us" },
    { label: "Для детей", href: "#courses" },
    { label: "Для взрослых", href: "#courses" },
    { label: "Контакты", href: "#contact" },
];
export const FOOTER_COURSE_LINKS = [
    "Frontend",
    "Python",
    "C++",
    "C#",
    "JavaScript",
    "UI/UX Design",
];
