import { useEffect, useRef, useState } from "react";

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
  const total = chapterLoaders.length;
  const startIndex = Math.max(1, Math.min(start, total)); // clamp
  const [loadedCount, setLoadedCount] = useState(startIndex); // loaded up to this index (inclusive)
  const [components, setComponents] = useState(Array(total + 1).fill(null)); // 1-based
  const sentinelRef = useRef(null);
  const obsRef = useRef(null);

  // load a chapter component (1-based)
  const loadChapter = (i) => {
    if (i < 1 || i > total) return;
    if (components[i]) return; // already loaded
    chapterLoaders[i - 1]().then((mod) => {
      const Comp = mod.default || mod;
      setComponents((prev) => {
        const copy = prev.slice();
        copy[i] = Comp;
        return copy;
      });
    });
  };

  // on startIndex change (navigating directly to another chapter), reset loadedCount
  useEffect(() => {
    setLoadedCount(startIndex);
    // optionally preload the start one immediately
    loadChapter(startIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIndex]);

  // load currently required chapters up to loadedCount
  useEffect(() => {
    for (let i = startIndex; i <= loadedCount; i++) {
      loadChapter(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedCount, startIndex]);

  // intersection observer to increment loadedCount when sentinel becomes visible
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
        rootMargin: "200px", // preload a bit earlier
        threshold: 0.1,
      }
    );
    if (sentinelRef.current) {
      obsRef.current.observe(sentinelRef.current);
    }
    return () => obsRef.current && obsRef.current.disconnect();
  }, [sentinelRef, total]);

  return (
    <div>
      {Array.from({ length: loadedCount - startIndex + 1 }, (_, idx) => {
        const chapIndex = startIndex + idx;
        const Comp = components[chapIndex];
        return (
          <section key={chapIndex} id={`chap-${chapIndex}`} style={{ marginBottom: 40 }}>
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