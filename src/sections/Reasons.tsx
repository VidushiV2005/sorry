'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SorryLetter() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);

  const handleOpen = () => {
    if (letterVisible) return;
    setEnvelopeOpen(true);
    setTimeout(() => setLetterVisible(true), 550);
  };

  const handleClose = () => {
    setLetterVisible(false);
    setTimeout(() => setEnvelopeOpen(false), 400);
  };

  // Lock body scroll when letter is open
  useEffect(() => {
    if (letterVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [letterVisible]);

  return (
    <>
      <section className="relative min-h-screen flex items-stretch overflow-hidden bg-[#0a0708]">

        {/* Left — photo */}
        <div className="hidden md:block w-1/2 relative overflow-hidden flex-shrink-0">
          <img
            src="/pics/IMG-20250915-WA0040.jpg"
            alt="For you"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75 saturate-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0708]/30 to-[#0a0708]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0708] via-transparent to-[#0a0708] opacity-60" />
        </div>

        {/* Right — envelope */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10 py-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-rose-900/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="font-serif text-[10px] tracking-[0.35em] uppercase text-rose-300/30 mb-4">
              a letter for you
            </p>

            <motion.div
              className="relative cursor-pointer select-none"
              onClick={handleOpen}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ width: 280, height: 190 }}
            >
              <div className="absolute inset-0 rounded-sm overflow-hidden border border-rose-900/25"
                style={{ background: 'linear-gradient(160deg,#1e1018 0%,#170d14 100%)' }}>
                <div className="absolute top-0 left-0 w-[140px] h-full"
                  style={{ clipPath: 'polygon(0 0,100% 50%,0 100%)', background: '#1c1018' }} />
                <div className="absolute top-0 right-0 w-[140px] h-full"
                  style={{ clipPath: 'polygon(100% 0,0 50%,100% 100%)', background: '#17090f' }} />
                <div className="absolute bottom-0 left-0 right-0 h-[100px] border-t border-rose-900/20"
                  style={{ clipPath: 'polygon(0 100%,50% 0%,100% 100%)', background: '#1a0e16' }} />
                <div className="absolute top-3 right-3 w-8 h-10 border border-rose-800/40 bg-[#1a0a12] flex items-center justify-center text-rose-400/60 text-xs z-10">
                  ♡
                </div>
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[100px] border-b border-rose-900/20 origin-top z-20"
                  style={{
                    clipPath: 'polygon(0 0,100% 0,50% 100%)',
                    background: 'linear-gradient(160deg,#2a1520,#1e1018)',
                  }}
                  animate={envelopeOpen ? { rotateX: -170, opacity: 0.5 } : { rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
                <p className="absolute bottom-5 left-0 right-0 text-center font-serif font-semibold text-[17px] tracking-[0.1em] text-rose-200/60 z-10">
                  I'm Sorry
                </p>
              </div>
            </motion.div>

            <motion.p
              className="text-[9px] tracking-[0.3em] uppercase font-serif text-rose-400/30"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              tap to open
            </motion.p>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {letterVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-5"
            onClick={handleClose}
            // Prevent wheel/touch events from reaching the page behind
            onWheel={e => e.stopPropagation()}
            onTouchMove={e => e.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-[560px] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Scrollable paper — stop propagation so scroll stays inside */}
              <div
                className="overflow-y-auto px-12 py-12"
                style={{
                  maxHeight: 'calc(100dvh - 120px)',
                  background: 'linear-gradient(160deg,#fdf6ee 0%,#faeade 60%,#f5e4d3 100%)',
                  clipPath: `polygon(
                    0% 2%, 3% 0%, 7% 1.5%, 13% 0%, 20% 1%, 28% 0%,
                    37% 1.5%, 46% 0%, 55% 1%, 63% 0%, 71% 1.5%, 79% 0%,
                    86% 1%, 92% 0%, 96% 1.5%, 100% 2%,
                    100% 98%, 97% 100%, 92% 98.5%, 86% 100%, 79% 99%,
                    71% 100%, 63% 98.5%, 55% 100%, 46% 99%, 37% 100%,
                    28% 98.5%, 20% 100%, 13% 99%, 7% 100%, 3% 98.5%, 0% 98%
                  )`,
                  // Give the scrollable area a little extra bottom padding so
                  // the last line isn't clipped by the torn edge clip-path
                  paddingBottom: '56px',
                }}
                onWheel={e => e.stopPropagation()}
                onTouchMove={e => e.stopPropagation()}
              >
                <h2
                  className="text-center font-serif font-semibold text-[24px] tracking-wide mb-7"
                  style={{ color: '#8b3a4a' }}
                >
                  I'm So Sorry
                </h2>

                <div
                  className="text-[15.5px] leading-[1.9] space-y-4"
                  style={{ color: '#4a3020', fontFamily: "'EB Garamond', serif" }}
                >
                  <p>
                    I know I hurt you, and I'm truly sorry. I've been thinking about everything,
                    and I can't stop feeling guilty for the pain I caused you.
                  </p>
                  <p>
                    I'm sorry that I lied. I'm sorry for breaking your trust and for making you
                    feel like you weren't important enough to me. That hurts the most because
                    you are so incredibly special to me, and I hate that my actions made you feel
                    otherwise. You've always meant so much more than I managed to show.
                  </p>
                  <p>
                    I know I disappointed you, and I understand why you're hurt. If I were in
                    your place, I'd probably feel the same way. I wish I could go back and do
                    things differently, but I can't. All I can do is take responsibility for
                    what I did and tell you how deeply sorry I am.
                  </p>
                  <p>
                    You deserve honesty, love, reassurance, and someone who makes you feel safe —
                    not someone who makes you doubt yourself. I'm sorry that I became the reason
                    for your pain.
                  </p>
                  <p>
                    I don't expect this apology to erase what happened, and I know trust isn't
                    rebuilt overnight. I just want you to know that I'm genuinely sorry, and
                    I'll always regret making you cry, making you overthink, and making you feel
                    like you weren't enough — when the truth is that you've always been more
                    than enough for me.
                  </p>
                  <p className="text-center italic pt-1" style={{ color: '#8b3a4a', fontSize: 16 }}>
                    I love you, and I'm sorry baby. ♡
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="mt-5 self-center text-[9px] tracking-[0.3em] uppercase font-serif text-rose-300/35 hover:text-rose-300/70 transition-colors duration-300"
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}