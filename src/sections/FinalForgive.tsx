import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function FinalForgive() {
  const [stage, setStage] = useState<'ask' | 'pleaded' | 'yes'>('ask');
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noClicks, setNoClicks] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const fireConfetti = () => {
    const duration = 2200;
    const end = Date.now() + duration;
    const colors = ['#7a1f33', '#b5894f', '#f4ede1', '#3d0f1a'];
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors, scalar: 0.8 });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors, scalar: 0.8 });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({ particleCount: 90, spread: 90, origin: { y: 0.6 }, colors, scalar: 0.9 });
  };

  const onYes = () => {
    setStage('yes');
    fireConfetti();
  };

  const onNoClick = () => {
    if (noClicks === 0) {
      setStage('pleaded');
      setNoClicks(1);
    } else {
      setNoClicks((c) => c + 1);
    }
  };

  const onNoHover = () => {
    if (noClicks < 1) return;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.random() * (rect.width - 140) - rect.width / 2 + 70;
    const y = Math.random() * 60 - 30;
    setNoPos({ x, y });
  };

  const heading =
    stage === 'ask'
      ? 'Can you forgive me?'
      : stage === 'pleaded'
      ? "You don't want to forgive me?"
      : 'Thank you.';

  const body =
    stage === 'ask'
      ? "Words can only do so much, but I mean every one of them. I'm sorry, and I want to be better for you."
      : stage === 'pleaded'
      ? "I know I made a mistake. Let me make it right. Please."
      : "I promise I'll always try to be better. I love you, so much.";

  return (
    <section className="relative px-6 sm:px-12 py-32 overflow-hidden">
      {/* Background image, dark but visible */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(/pics/IMG-20260407-WA0012.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/75" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center" ref={containerRef}>
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.35em' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-[11px] uppercase text-white/40 font-light mb-6"
        >
          before we go on
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="h-px w-12 bg-white/25 mx-auto mb-10"
        />

        <motion.h2
          key={heading}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-serif font-bold text-4xl sm:text-6xl text-white drop-shadow-lg leading-tight"
        >
          {heading}
        </motion.h2>

        {/* signature underline draw-on */}
        <motion.svg
          key={heading + '-underline'}
          viewBox="0 0 220 12"
          className="w-40 sm:w-52 h-3 mx-auto mt-3"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M4 8 C 40 2, 80 10, 110 5 S 180 0, 216 6"
            fill="none"
            stroke="rgba(216,68,90,0.7)"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 },
            }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
          />
        </motion.svg>

        <motion.p
          key={body}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-light text-white/65 text-lg mt-7 leading-relaxed max-w-sm mx-auto"
        >
          {body}
        </motion.p>

        {stage !== 'yes' && (
          <div className="relative mt-14 flex items-center justify-center gap-10 h-20">
            <motion.button
              onClick={onYes}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: noClicks >= 1 ? 1.12 : 1,
                boxShadow:
                  noClicks >= 1
                    ? '0 0 0 1px rgba(255,224,178,0.7), 0 0 46px 10px rgba(255,99,99,0.7)'
                    : '0 0 0 1px rgba(255,224,178,0.5), 0 0 24px 4px rgba(255,99,99,0.45)',
              }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden rounded-full bg-gradient-to-br from-[#ff8a5c] via-[#ff5c7a] to-[#ff3d68] px-9 py-3.5 font-serif text-sm tracking-[0.2em] uppercase text-white flex items-center gap-2"
            >
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
              <span className="relative">Yes</span>
              <span className="relative text-base">💖</span>
            </motion.button>

            <motion.button
              onClick={onNoClick}
              onMouseEnter={onNoHover}
              animate={{ x: noPos.x, y: noPos.y }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-full bg-white/8 backdrop-blur-sm border border-white/15 px-7 py-3 font-serif text-sm tracking-[0.2em] uppercase text-white/60 hover:text-white/80 hover:bg-white/15 flex items-center gap-2"
            >
              <span>No</span>
              <span className="text-base">🙈</span>
            </motion.button>
          </div>
        )}

        {stage === 'yes' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 h-px w-12 bg-white/25 mx-auto"
          />
        )}
      </div>
    </section>
  );
}