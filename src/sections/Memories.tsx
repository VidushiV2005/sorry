import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Polaroid from '@/components/Polaroid';
import { memories, Memory } from '@/constants/content';

export default function Memories() {
  const [openVideo, setOpenVideo] = useState<Memory | null>(null);

  return (
    <section className="relative px-6 sm:px-12 py-28 overflow-hidden">
      {/* Background image, dark + blurred */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(/pics/IMG_4642.JPG)` }}
        />
        <div className="absolute inset-0 backdrop-blur-md bg-black/75" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif font-bold text-5xl sm:text-6xl text-white text-center mb-3 drop-shadow-lg"
        >
          Memories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center font-light text-white/60 tracking-wide mb-20"
        >
          a little scrapbook of everything you mean to me
        </motion.p>

        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15" />
          <div className="space-y-24">
            {memories.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`flex flex-col sm:flex-row items-center gap-8 ${
                  i % 2 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="sm:w-1/2 flex justify-center">
                  <motion.div
                    className="relative cursor-pointer"
                    initial={{ opacity: 0, scale: 0.85, rotate: i % 2 ? 6 : -6 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: i % 2 ? 3 : -3 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    whileHover={{ scale: 1.04, rotate: 0 }}
                    onClick={() => m.video && setOpenVideo(m)}
                  >
                    <Polaroid src={m.photo} alt={m.title} rotate={i % 2 ? 3 : -3} />
                    {m.video && (
                      <span className="absolute inset-0 flex items-center justify-center text-3xl">
                        ▶
                      </span>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="sm:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl"
                >
                  <p className="font-light text-xs uppercase tracking-[0.25em] text-white/40">
                    {m.date}
                  </p>
                  <h3 className="font-serif font-semibold text-3xl text-white mt-2">
                    {m.title}
                  </h3>
                  <p className="font-light text-white/70 mt-3 leading-relaxed">
                    {m.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-6"
            onClick={() => setOpenVideo(null)}
          >
            <motion.video
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={openVideo.video}
              controls
              autoPlay
              className="max-w-3xl w-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}