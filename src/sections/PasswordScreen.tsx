import { useState } from 'react';
import { motion } from 'framer-motion';
import { PASSWORD } from '@/constants/content';

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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/pics/IMG_2923.JPG)` }}
      />

      {/* Dark blurred gradient overlay, stronger on the left where the card sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className={`w-full max-w-sm ${wrong ? 'animate-shake' : ''}`}
        >
          <p className="font-serif text-xs tracking-[0.3em] text-white/50 uppercase mb-3">
            For you
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white/95 leading-tight mb-2">
            Hi, baby
          </h1>
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
              className="mt-4 w-fit border border-white/40 px-7 py-2.5 text-xs tracking-[0.2em] uppercase text-white/90 hover:bg-white/10 hover:border-white/70 active:scale-95 transition"
            >
              Unlock
            </button>
          </form>

          {wrong && (
            <p className="mt-4 text-xs tracking-wide text-rose-300/80 font-light">
              that's not our date...
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}