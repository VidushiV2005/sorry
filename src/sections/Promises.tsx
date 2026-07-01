'use client';

import { motion } from 'framer-motion';

export default function Promises() {
  return (
    <section className="relative min-h-screen bg-[#080608] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">

      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose-950/20 blur-[120px] pointer-events-none" />

      {/* Text block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center max-w-xl mb-16"
      >
        <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-rose-300/30 mb-6">
          my promise to you
        </p>

        <p
          className="font-serif text-[17px] sm:text-[19px] leading-[1.95] text-stone-300/75"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          I promise to always be honest with you, even when the truth is
          difficult. I will never lie to you again or take your love, trust,
          and presence for granted.{' '}
          <span className="text-rose-200/60 italic">
            I'll cherish what we have, appreciate you a little more every day,
            and never stop making you feel loved, valued, and important.
          </span>{' '}
          I know promises mean nothing without actions so I'll let my actions
          prove these words.
        </p>

        {/* Divider */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-rose-900/40" />
          <span className="text-rose-300/25 text-xs">🤍</span>
          <div className="h-px w-16 bg-rose-900/40" />
        </div>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10"
      >
        <div
          className="relative overflow-hidden"
          style={{
            width: 'min(72vw, 340px)',
            aspectRatio: '1 / 1',
            borderRadius: 4,
            border: '1px solid rgba(180,80,100,0.15)',
            boxShadow: '0 0 80px rgba(120,30,50,0.18)',
          }}
        >
          <video
            src="/pics/VN20250816_234917.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* dark vignette over video */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        </div>
      </motion.div>

    </section>
  );
}