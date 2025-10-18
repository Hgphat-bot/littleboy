import React, { useRef, useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const chapters = [
  "/chap1",
  "/chap2",
  "/chap3",
  "/chap4",
  "/chap5",
  "/chap6",
  "/chap7",
];

export default function AutoPageNav({ children, cooldown = 800 }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cooldownRef = useRef(false);
  const touchStartY = useRef(null);
  const [leaving, setLeaving] = useState(false);

  const atBottom = () =>
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  
  const transition = Math.min(600, cooldown);

  const goTo = useCallback(
    (dir) => {
      // only allow moving to next page
      if (dir !== "next") return;

      if (cooldownRef.current) return;
      const idx = chapters.indexOf(pathname.toLowerCase());
      if (idx === -1) return;
      const next = chapters[idx + 1];
      if (!next) return;

      // start visual leaving animation
      cooldownRef.current = true;
      setLeaving(true);

      // After the visual transition, navigate. Keep the original cooldown period
      // before allowing another navigation.
      setTimeout(() => {
        navigate(next, { replace: false });
        // after navigation, keep cooldown for the requested time, then reset
        setTimeout(() => {
          cooldownRef.current = false;
          window.scrollTo({ top: 0 });
        }, cooldown);
        // end leaving state shortly after navigation so new page can fade in
        setTimeout(() => setLeaving(false), 50);
      }, transition);
    },
    [navigate, pathname, cooldown, transition]
  );

  useEffect(() => {
    const onWheel = (e) => {
      const deltaY = e.deltaY;
      // only go to next when scrolling down at bottom
      if (deltaY > 25 && atBottom()) {
        goTo("next");
      }
    };

    const onTouchStart = (e) => {
      touchStartY.current = e.touches?.[0]?.clientY ?? null;
    };
    const onTouchEnd = (e) => {
      if (touchStartY.current == null) return;
      const endY = e.changedTouches?.[0]?.clientY ?? null;
      if (endY == null) return;
      const dy = touchStartY.current - endY;
      // only go to next when swiping up (dy > 0) at bottom
      if (dy > 50 && atBottom()) {
        goTo("next");
      }
      touchStartY.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [goTo]);

  // inline style for the fade/translate effect
  const wrapperStyle = {
    transition: `opacity ${transition}ms ease, transform ${transition}ms ease`,
    opacity: leaving ? 0 : 1,
    transform: leaving ? "translateY(-12px)" : "translateY(0)",
    willChange: "opacity, transform",
  };

  return <div style={wrapperStyle}>{children}</div>;
}