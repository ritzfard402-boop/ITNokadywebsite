import { useEffect, useState } from "react";
export function useMediaQuery(query) {
    const getMatch = () => typeof window !== "undefined" ? window.matchMedia(query).matches : false;
    const [matches, setMatches] = useState(getMatch);
    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQueryList.matches);
        handleChange();
        mediaQueryList.addEventListener("change", handleChange);
        return () => mediaQueryList.removeEventListener("change", handleChange);
    }, [query]);
    return matches;
}
