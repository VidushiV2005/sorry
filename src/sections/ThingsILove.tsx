import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { thingsILove } from '@/constants/content';

function HangingCard({ item, index }: { item: typeof thingsILove[0]; index: number }) {
  const duration = 3.2 + (index % 4) * 0.5;
  const delay = (index % 5) * 0.3;
  const amplitude = 4 + (index % 3) * 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: 'easeOut' }}
      className="flex flex-col items-center"
      style={{ transformOrigin: 'top center' }}
    >
      {/* Pin dot */}
      <div className="w-2 h-2 rounded-full bg-white/50 mb-1" />
      {/* String + card, swinging together from the pin */}
      <motion.div
        animate={{ rotate: [-amplitude, amplitude, -amplitude] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        whileHover={{
          rotate: [-amplitude, amplitude, -amplitude],
          transition: { duration: duration * 0.35, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ transformOrigin: 'top center' }}
        className="flex flex-col items-center"
      >
        <div className="w-px h-10 sm:h-14 bg-white/30" />
        <div className="w-44 sm:w-52 -mt-px bg-white/8 backdrop-blur-md border border-white/15 rounded-xl px-5 py-6 text-center shadow-xl">
          <h3 className="font-serif font-semibold text-lg text-white leading-snug">
            {item.title}
          </h3>
          <p className="font-light text-xs text-white/65 mt-3 leading-relaxed">
            {item.note}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ThingsILove() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const windSway = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 2, -2]);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 sm:px-12 py-28 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(/pics/IMG-20251122-WA0013.jpg)` }}
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif font-bold text-5xl sm:text-6xl text-white text-center mb-3 drop-shadow-lg"
        >
          Little Things I Love About You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center font-light text-white/60 tracking-wide mb-20"
        >
          all the small things that somehow add up to everything
        </motion.p>

        <motion.div
          style={{ rotate: windSway }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-12 sm:gap-y-16 origin-top"
        >
          {thingsILove.map((item, i) => (
            <HangingCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}