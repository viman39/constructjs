import { useState, useEffect } from "react";

type BreakPoint = 960 | 680;

export const SCREEN_BREAKPOINT_TABLET = 960;
export const SCREEN_BREAKPOINT_MOBILE = 680;

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export const useBreakPoint = (breakPoint: BreakPoint) => {
  const { width } = useScreenSize();

  return width < breakPoint;
};
