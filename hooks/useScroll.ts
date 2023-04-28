import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";
const [scrollY, setScrollY] = useState<number>(0);
export const useScroll = (): number => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
};
const handleScroll = () => {
  const current = isBrowser ? window.scrollY : 0;
  setScrollY(current);
};
