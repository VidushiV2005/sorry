import { useEffect, useRef, useState } from 'react';

interface Trail {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const idRef = useRef(0);
  const lastSpawn = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const now = Date.now();
      if (now - lastSpawn.current > 120) {
        lastSpawn.current = now;
        const id = idRef.current++;
        setTrails((t) => [...t, { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => {
          setTrails((t) => t.filter((tr) => tr.id !== id));
        }, 700);
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="hidden md:block">
      <div
        className="fixed z-[9999] pointer-events-none text-lg"
        style={{ left: pos.x - 8, top: pos.y - 8, transition: 'transform 0.05s linear' }}
      >
        💗
      </div>
      {trails.map((t) => (
        <span
          key={t.id}
          className="fixed z-[9998] pointer-events-none text-xs animate-sparkle"
          style={{ left: t.x - 4, top: t.y - 4 }}
        >
          ✨
        </span>
      ))}
    </div>
  );
}
