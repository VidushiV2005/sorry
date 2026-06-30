import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const line =
  "I love you more than words manage to say. I'm grateful for every ordinary day with you, and I'm truly sorry for all the mess i have created. I never wanted to hurt you — not once. You mean everything to me.";

const words = line.split(' ');

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/pics/WhatsApp Video 2026-06-30 at 11.20.39 PM.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <Heart className="text-rose-300/80 w-5 h-5 fill-rose-300/80" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-white/60 font-light">
            for you
          </span>
          <Heart className="text-rose-300/80 w-5 h-5 fill-rose-300/80" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-serif font-bold text-6xl sm:text-8xl text-white tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
        >
          Hi Baby
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-3 font-serif italic text-xl sm:text-2xl text-rose-200/90"
        >
          I'm sorry, and I love you.
        </motion.p>

        <p className="mt-8 font-light text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.035, duration: 0.4 }}
              className="inline-block mr-1.5"
            >
              {w}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-10 flex justify-center gap-2"
        >
          <Heart className="w-4 h-4 fill-rose-300/60 text-rose-300/60" />
          <Heart className="w-4 h-4 fill-rose-300/80 text-rose-300/80" />
          <Heart className="w-4 h-4 fill-rose-300/60 text-rose-300/60" />
        </motion.div>
      </div>
    </section>
  );
}