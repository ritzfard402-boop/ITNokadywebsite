const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red";
const variantStyles = {
    primary: "bg-brand-red text-white hover:bg-brand-red-dark",
    outline: "border border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
};
export default function Button({ variant = "primary", withArrow = false, className = "", children, ...rest }) {
    return (<button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...rest}>
      {children}
      {withArrow && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)}
    </button>);
}
