import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const chapterLoaders = [
  () => import("../pages/Chap1.jsx"),
  () => import("../pages/Chap2.jsx"),
  () => import("../pages/Chap3.jsx"),
  () => import("../pages/Chap4.jsx"),
  () => import("../pages/Chap5.jsx"),
  () => import("../pages/Chap6.jsx"),
  () => import("../pages/Chap7.jsx"),
];

export default function ChapterStream({ start = 1 }) {
  const navigate = useNavigate();
  const total = chapterLoaders.length;
  const startIndex = Math.max(1, Math.min(start, total));
  const [loadedCount, setLoadedCount] = useState(startIndex);
  const [components, setComponents] = useState(Array(total + 1).fill(null));
  const sentinelRef = useRef(null);
  const obsRef = useRef(null);
  const sectionObserverRef = useRef(null);
  const sectionRefs = useRef({});
  const [currentVisible, setCurrentVisible] = useState(startIndex);

  const loadChapter = (i) => {
    if (i < 1 || i > total) return;
    if (components[i]) return;
    chapterLoaders[i - 1]().then((mod) => {
      const Comp = mod.default || mod;
      setComponents((prev) => {
        const copy = prev.slice();
        copy[i] = Comp;
        return copy;
      });
    });
  };

  useEffect(() => {
    setLoadedCount(startIndex);
    loadChapter(startIndex);
    navigate(`/chap${startIndex}`, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIndex]);

  useEffect(() => {
    for (let i = startIndex; i <= loadedCount; i++) {
      loadChapter(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedCount, startIndex]);

  useEffect(() => {
    if (obsRef.current) obsRef.current.disconnect();
    obsRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setLoadedCount((prev) => {
              const next = Math.min(total, prev + 1);
              return next;
            });
          }
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );
    if (sentinelRef.current) {
      obsRef.current.observe(sentinelRef.current);
    }
    return () => obsRef.current && obsRef.current.disconnect();
  }, [sentinelRef, total]);

  useEffect(() => {
    if (sectionObserverRef.current) {
      sectionObserverRef.current.disconnect();
      sectionObserverRef.current = null;
    }

    sectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          if (!best || e.intersectionRatio > best.intersectionRatio) {
            best = e;
          }
        }
        if (best) {
          const idx = Number(best.target.getAttribute("data-chap-index"));
          if (idx && idx !== currentVisible) {
            setCurrentVisible(idx);
            navigate(`/chap${idx}`, { replace: true });
          }
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    // observe all rendered section elements
    for (let i = startIndex; i <= loadedCount; i++) {
      const el = sectionRefs.current[i];
      if (el) sectionObserverRef.current.observe(el);
    }

    return () => {
      if (sectionObserverRef.current) sectionObserverRef.current.disconnect();
    };
    // re-run when loadedCount changes so new sections get observed
  }, [loadedCount, startIndex, navigate, currentVisible]);

  const setSectionRef = (i) => (el) => {
    if (el) sectionRefs.current[i] = el;
    else delete sectionRefs.current[i];
  };

  return (
    <div>
      {Array.from({ length: loadedCount - startIndex + 1 }, (_, idx) => {
        const chapIndex = startIndex + idx;
        const Comp = components[chapIndex];
        return (
          <section
            key={chapIndex}
            id={`chap-${chapIndex}`}
            data-chap-index={chapIndex}
            ref={setSectionRef(chapIndex)}
            style={{ marginBottom: 40 }}
          >
            {Comp ? <Comp /> : <div style={{ padding: 40, textAlign: "center" }}>Đang tải chương {chapIndex}…</div>}
          </section>
        );
      })}

      {/* sentinel để quan sát scroll; khi visible sẽ kích hoạt load chương tiếp */}
      <div ref={sentinelRef} style={{ height: 1 }} aria-hidden="true" />
      {/* nếu đã load hết thì hiển thị footer / kết thúc */}
      {loadedCount >= total && (
        <div style={{ textAlign: "center", padding: 24, color: "#666" }}>
          Đây là chương cuối.
        </div>
      )}
    </div>
  );
}