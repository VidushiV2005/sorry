import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { loveNotes } from '@/constants/content';

export default function LoveNotes() {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const usedIndexes = useRef<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const heartsY = useTransform(scrollYProgress, [0, 0.5, 1], [6, -4, 6]);
  const heartsRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-1.5, 1.5, -1.5]);

  const pullNote = () => {
    if (usedIndexes.current.size === loveNotes.length) {
      usedIndexes.current.clear();
    }
    let idx: number;
    do {
      idx = Math.floor(Math.random() * loveNotes.length);
    } while (usedIndexes.current.has(idx));
    usedIndexes.current.add(idx);
    setActiveNote(loveNotes[idx].message);
  };

  const hearts = Array.from({ length: 220 }).map((_, i) => {
    const cols = 13;
    const row = Math.floor(i / cols);
    const col = i % cols;
    const jitterX = ((i * 13) % 7) - 3;
    const jitterY = ((i * 19) % 7) - 3;
    const x = 32 + col * 16.5 + jitterX + (row % 2 === 0 ? 5 : -3);
    const y = 254 - row * 12.5 + jitterY;
    const sizeClass = i % 5;
    const s =
      sizeClass === 0 ? 0.65 :
      sizeClass === 1 ? 0.85 :
      sizeClass === 2 ? 1.05 :
      sizeClass === 3 ? 1.3 : 0.95;
    const r = ((i * 41) % 60) - 30;
    const shades = ['#7a0d1f', '#8e0f24', '#6b0a19', '#9c1228', '#5e0816'];
    const fill = shades[i % shades.length];
    const floatDelay = (i % 12) * 0.15;
    const floatDuration = 2.8 + (i % 5) * 0.4;
    return { x, y, s, r, fill, floatDelay, floatDuration, key: i };
  });

  return (
    <section
      ref={sectionRef}
      className="relative px-6 sm:px-12 py-36 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(/pics/IMG_7341.JPG)` }}
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <motion.div
            className="relative cursor-pointer select-none"
            onClick={pullNote}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="360" height="400" viewBox="0 0 280 280" fill="none">
              <defs>
                <clipPath id="jarClip">
                  <path d="M38 56 L242 56 L250 256 Q250 266 240 266 L40 266 Q30 266 30 256 L38 56 Z" />
                </clipPath>
              </defs>

              <rect x="28" y="34" width="224" height="16" rx="8" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              <rect x="36" y="44" width="208" height="12" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

              <path
                d="M38 56 L242 56 L250 256 Q250 266 240 266 L40 266 Q30 266 30 256 L38 56 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="2.5"
              />

              {/* Hearts — fade in as a group, each one floats individually via SMIL */}
              <motion.g
                clipPath="url(#jarClip)"
                style={{ y: heartsY, rotate: heartsRotate }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {hearts.map((h) => (
                  <path
                    key={h.key}
                    d="M0 4 C0 1 2.5 -1 5 1 C7.5 -1 10 1 10 4 C10 7 5 11 5 11 C5 11 0 7 0 4 Z"
                    fill={h.fill}
                    transform={`translate(${h.x} ${h.y}) scale(${h.s}) rotate(${h.r})`}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 -2; 0 0"
                      dur={`${h.floatDuration}s`}
                      begin={`${h.floatDelay}s`}
                      repeatCount="indefinite"
                      additive="sum"
                    />
                  </path>
                ))}
              </motion.g>

              <path d="M50 70 L42 250" stroke="rgba(255,255,255,0.12)" strokeWidth="6" strokeLinecap="round" />
              <path d="M222 80 L230 230" stroke="rgba(255,255,255,0.07)" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.25em] uppercase text-white/40 whitespace-nowrap"
            >
              tap the jar
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center sm:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif font-bold text-6xl sm:text-7xl text-white mb-6 leading-tight"
          >
            Jar of Love
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="font-light text-white/60 leading-relaxed max-w-md text-lg"
          >
            A jar full of things I never say enough. Tap it, and let one
            unfold — read it like I'm saying it to you right now.
          </motion.p>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActiveNote(null)}
          >
            <CrumpledNote message={activeNote} onClose={() => setActiveNote(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CrumpledNote({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  const [unfolded, setUnfolded] = useState(false);

  useState(() => {
    const t = setTimeout(() => setUnfolded(true), 350);
    return () => clearTimeout(t);
  });

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0.15, rotate: -15, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      exit={{ scale: 0.15, opacity: 0, rotate: 15 }}
      transition={{ type: 'spring', stiffness: 150, damping: 17 }}
      className="relative max-w-lg w-full"
    >
      <motion.div
        animate={{ opacity: unfolded ? 0 : 1, scale: unfolded ? 1.4 : 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-28 h-28 bg-[#e6d8bd]"
          style={{
            clipPath:
              'polygon(8% 0%, 35% 6%, 60% 0%, 100% 18%, 92% 45%, 100% 70%, 78% 100%, 50% 88%, 22% 100%, 0% 75%, 10% 48%, 0% 22%)',
            filter: 'brightness(0.85) contrast(1.1)',
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          opacity: unfolded ? 1 : 0,
          scaleX: unfolded ? 1 : 0.6,
          scaleY: unfolded ? 1 : 0.6,
        }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          clipPath:
            'polygon(2% 6%, 14% 2%, 30% 5%, 48% 1%, 64% 4%, 82% 1%, 98% 5%, 100% 22%, 97% 40%, 100% 58%, 96% 76%, 99% 92%, 84% 98%, 68% 95%, 52% 99%, 36% 96%, 18% 99%, 1% 94%, 4% 76%, 0% 58%, 3% 40%, 1% 22%)',
          background:
            'radial-gradient(circle at 20% 15%, rgba(120,90,50,0.12), transparent 40%), radial-gradient(circle at 80% 85%, rgba(120,90,50,0.1), transparent 45%), linear-gradient(135deg, #e9dcc0, #d8c8a4 55%, #e3d4ae)',
          boxShadow:
            'inset 0 0 40px rgba(90,60,20,0.25), inset 0 0 4px rgba(0,0,0,0.2)',
        }}
        className="px-8 py-12 sm:px-12 sm:py-16"
      >
        <p className="text-center text-2xl mb-5 opacity-80">♥</p>
        <p
          className="font-serif text-lg sm:text-xl leading-relaxed text-center"
          style={{ color: '#4a3826' }}
        >
          {message}
        </p>
      </motion.div>

      <motion.div
        animate={{ opacity: unfolded ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center mt-8"
      >
        <button
          onClick={onClose}
          className="px-7 py-2.5 text-xs tracking-[0.25em] uppercase text-white/50 hover:text-white/85 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}