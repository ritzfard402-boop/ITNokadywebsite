export function IconPython(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2c-3 0-5 1-5 3v2h5v1H5c-2 0-3 1.5-3 4s1 4 3 4h2v-2c0-2 1.5-3 3-3h4c2 0 3-1 3-3V5c0-2-2-3-5-3Zm-2.2 2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="currentColor"/>
      <path d="M12 22c3 0 5-1 5-3v-2h-5v-1h7c2 0 3-1.5 3-4s-1-4-3-4h-2v2c0 2-1.5 3-3 3H10c-2 0-3 1-3 3v3c0 2 2 3 5 3Zm2.2-2.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="currentColor" opacity="0.55"/>
    </svg>);
}
export function IconJava(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor"/>
      <path d="M9 7.5c1.2 1 1.2 2 0 3M15 7.5c1.2 1 1.2 2 0 3" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.85"/>
      <path d="M7 15.5c2 1.3 8 1.3 10 0" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M8.5 18c2.2 1 4.8 1 7 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
    </svg>);
}
export function IconCPlusPlus(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" fill="currentColor" opacity="0.12"/>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor">
        C++
      </text>
    </svg>);
}
export function IconCSharp(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" fill="currentColor" opacity="0.12"/>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor">
        C#
      </text>
    </svg>);
}
export function IconJavaScript(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor"/>
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">
        JS
      </text>
    </svg>);
}
export function IconCodeTag(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="m9 6-6 6 6 6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}
export function IconAI(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <text x="12" y="14.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="currentColor">
        AI
      </text>
      {[4, 8, 12, 16, 20].map((pos, i) => (<line key={i} x1={pos > 12 ? 17 : 7} y1={pos} x2={pos > 12 ? 21 : 3} y2={pos} stroke="currentColor" strokeWidth="1.2"/>))}
    </svg>);
}
export function IconUserGear(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="10" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M4 20c0-3.6 2.7-6 6-6s6 2.4 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="18.5" cy="15.5" r="2.4" stroke="currentColor" strokeWidth="1.4"/>
    </svg>);
}
export function IconDesignPen(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="m4 20 3.2-1.1L18 8.1a1.5 1.5 0 0 0 0-2.1l-.9-.9a1.5 1.5 0 0 0-2.1 0L4.1 15.9 3 19l1 1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="m13.5 6.5 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="18" cy="6" r="1.4" fill="currentColor"/>
    </svg>);
}
export function IconOffice(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="6" y="7" width="6" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="6" y="14" width="6" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M14 8h5M14 12h5M14 16h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>);
}
export function IconGamepad(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="9" width="18" height="9" rx="4.5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M7 12v3M5.5 13.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="16" cy="12" r="1" fill="currentColor"/>
      <circle cx="18" cy="14.5" r="1" fill="currentColor"/>
    </svg>);
}
export function IconWorker(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M8.5 6h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>);
}
export function IconOfficeDocs(props) {
    return (<svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="4" width="9" height="16" rx="1.2" fill="currentColor" opacity="0.15"/>
      <text x="7.5" y="14.5" textAnchor="middle" fontSize="7" fontWeight="800" fill="currentColor">
        W
      </text>
      <rect x="12" y="4" width="9" height="16" rx="1.2" stroke="currentColor" strokeWidth="1.4"/>
      <text x="16.5" y="14.5" textAnchor="middle" fontSize="7" fontWeight="800" fill="currentColor">
        X
      </text>
    </svg>);
}
