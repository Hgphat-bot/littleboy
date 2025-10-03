import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const location = useLocation();
  const routes = ['/chap1', '/chap2', '/chap3'];
  // normalize pathname (remove trailing slash) to match routes like /chap1
  const pathname = location.pathname.replace(/\/$/, '').toLowerCase();
  const idx = routes.indexOf(pathname);

  const prev = idx > 0 ? routes[idx - 1] : null;
  const next = idx >= 0 && idx < routes.length - 1 ? routes[idx + 1] : null;

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const touchStartY = useRef(null);

  useEffect(() => {
    const SCROLL_THRESHOLD = 50;

    function onScroll() {
      const currentY = window.scrollY;
      if (currentY - lastScrollY.current > SCROLL_THRESHOLD) {
        // scrolling down -> hide footer
        setVisible(false);
      } else if (lastScrollY.current - currentY > SCROLL_THRESHOLD) {
        // scrolling up -> show footer
        setVisible(true);
      }
      lastScrollY.current = currentY;
    }

    function onTouchStart(e) {
      if (e.touches && e.touches.length) touchStartY.current = e.touches[0].clientY;
    }

    function onTouchEnd(e) {
      if (touchStartY.current == null) return;
      const endY = (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY) || null;
      if (endY == null) return;
      const delta = endY - touchStartY.current;
      const SWIPE_THRESHOLD = 70;
  if (delta > SWIPE_THRESHOLD) setVisible(true); // swipe down -> show
  else if (delta < -SWIPE_THRESHOLD) setVisible(false); // swipe up -> hide
      touchStartY.current = null;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  const translateClass = visible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0';

  return (
    <footer className={`fixed bottom-4 inset-x-0 flex justify-center transition-transform duration-300 ease-in-out ${translateClass}`} style={{ zIndex: 9999 }}>
      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-4">
        {prev ? (
          <Link to={prev} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
            &larr; Prev
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-400" disabled>
            &larr; Prev
          </button>
        )}

        <span className="text-sm text-gray-700">{idx >= 0 ? `Chương ${idx + 1}` : 'Trang chủ'}</span>

        {next ? (
          <Link to={next} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Next &rarr;
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-400" disabled>
            Next &rarr;
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
