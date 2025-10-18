import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const location = useLocation();
  const routes = ['/chap1', '/chap2', '/chap3', '/chap4', '/chap5', '/chap6', '/chap7'];
  const pathname = location.pathname.replace(/\/$/, '').toLowerCase();
  const idx = routes.indexOf(pathname);

  const prev = idx > 0 ? routes[idx - 1] : null;
  const next = idx >= 0 && idx < routes.length - 1 ? routes[idx + 1] : null;

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const touchStartY = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const SCROLL_THRESHOLD = 50;

    function onScroll() {
      const currentY = window.scrollY;
      if (currentY - lastScrollY.current > SCROLL_THRESHOLD) {
        setVisible(false);
      } else if (lastScrollY.current - currentY > SCROLL_THRESHOLD) {
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
      if (delta > SWIPE_THRESHOLD) setVisible(true);
      else if (delta < -SWIPE_THRESHOLD) setVisible(false);
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

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  const translateClass = visible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0';

  return (
    <footer className={`fixed bottom-4 inset-x-0 flex justify-center transition-transform duration-300 ease-in-out ${translateClass}`} style={{ zIndex: 9999 }}>
      <div className="relative bg-gray-900/95 text-white backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-4 ring-1 ring-white/5">
        {prev ? (
          <Link to={prev} className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full hover:bg-gray-700 transition-colors">
            &larr; Prev
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-800 rounded-full text-gray-500" disabled>
            &larr; Prev
          </button>
        )}

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(s => !s)}
            className="text-sm text-white/90 px-3 py-1 rounded-full hover:bg-gray-800/70 focus:outline-none transition-colors"
            aria-expanded={menuOpen}
            aria-haspopup="menu"
          >
            {idx >= 0 ? `Chương ${idx + 1} ▾` : 'Trang chủ ▾'}
          </button>

          {menuOpen && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-52 bg-gray-800 text-white rounded-lg shadow-lg ring-1 ring-white/10 p-2">
              {routes.map((r, i) => (
                <Link
                  key={r}
                  to={r}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded transition-colors hover:bg-gray-700/60 ${i === idx ? 'font-semibold text-indigo-300' : 'text-gray-200'}`}
                >
                  Chương {i + 1}
                </Link>
              ))}
            </div>
          )}
        </div>

        {next ? (
          <Link to={next} className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors">
            Next &rarr;
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-800 rounded-full text-gray-500" disabled>
            Next &rarr;
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
