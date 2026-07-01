import { useState } from 'react';
import { motion } from 'framer-motion';
import { PASSWORD } from '@/constants/content';

const HEART_CURSOR =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24'%3E%3Cpath d='M12 21s-6.7-4.35-9.3-8.1C1 10.5 1.5 7 4.5 5.7 6.7 4.7 9 5.6 12 8.3 15 5.6 17.3 4.7 19.5 5.7 22.5 7 23 10.5 21.3 12.9 18.7 16.65 12 21 12 21z' fill='white' fill-opacity='0.95' stroke='%23f5c6cf' stroke-width='0.6'/%3E%3C/svg%3E\") 14 14, auto";

// A few soft floating hearts for ambience
const FLOATING_HEARTS = [
  { left: '8%', size: 14, delay: 0, duration: 9 },
  { left: '22%', size: 10, delay: 2.5, duration: 11 },
  { left: '78%', size: 16, delay: 1, duration: 10 },
  { left: '90%', size: 11, delay: 4, duration: 8.5 },
  { left: '55%', size: 9, delay: 3.2, duration: 12 },
];

export default function PasswordScreen({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('');
  const [wrong, setWrong] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === PASSWORD) {
      onUnlock();
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 600);
    }
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ cursor: HEART_CURSOR }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/pics/IMG_2923.JPG)` }}
      />

      {/* Dark blurred gradient overlay, stronger on the left where the card sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10" />

      {/* Floating hearts, subtle */}
      <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        {FLOATING_HEARTS.map((h, i) => (
          <motion.span
            key={i}
            className="absolute bottom-[-5%] text-white/20"
            style={{ left: h.left, fontSize: h.size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: '-110vh', opacity: [0, 0.5, 0.5, 0] }}
            transition={{
              duration: h.duration,
              delay: h.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ♥
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className={`relative w-full max-w-sm ${wrong ? 'animate-shake' : ''}`}
        >
          {/* Soft glow behind the card */}
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-rose-200/10 blur-3xl" />

          <p className="font-serif text-xs tracking-[0.3em] text-white/50 uppercase mb-3">
            For you
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white/95 leading-tight mb-2">
            Hi, baby
          </h1>
          {/* Thin shimmering divider */}
          <motion.div
            className="h-px w-16 mb-4 bg-gradient-to-r from-white/60 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
          <p className="font-light text-sm sm:text-base text-white/60 mb-10 tracking-wide">
            I made something only for you.
          </p>

          <form onSubmit={submit} className="flex flex-col gap-4">
            <input
              type="password"
              inputMode="numeric"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="our special date"
              className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder-white/40 text-sm tracking-wide outline-none focus:border-white/70 transition-colors"
            />
            <button
              type="submit"
              className="cursor-[inherit] mt-4 w-fit border border-white/40 px-7 py-2.5 text-xs tracking-[0.2em] uppercase text-white/90 hover:bg-white/10 hover:border-white/70 active:scale-95 transition"
            >
              Unlock
            </button>
          </form>

          {wrong && (
            <p className="mt-4 text-xs tracking-wide text-rose-300/80 font-light">
              that's not our date...
            </p>
          )}

          {/* Small signature line */}
          <p className="mt-14 font-serif italic text-[11px] tracking-wide text-white/30">
            always yours
          </p>
        </motion.div>
      </div>
    </div>
  );
}