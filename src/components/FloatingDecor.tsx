import { useMemo } from 'react';
import { motion } from 'framer-motion';

const ICONS = ['💖', '✨', '🌸', '⭐', '🎀', '🦋', '💫'];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function FloatingDecor({ count = 14 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        left: rand(2, 96),
        size: rand(14, 30),
        delay: rand(0, 6),
        duration: rand(7, 14),
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {items.map((it) => (
        <motion.span
          key={it.id}
          className="absolute opacity-60"
          style={{ left: `${it.left}%`, top: '100%', fontSize: it.size }}
          animate={{ y: ['0%', '-120vh'], rotate: [0, 25, -15, 0], opacity: [0, 0.7, 0.7, 0] }}
          transition={{
            duration: it.duration,
            delay: it.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {it.icon}
        </motion.span>
      ))}
    </div>
  );
}
