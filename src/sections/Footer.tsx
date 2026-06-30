import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-black py-7 border-t border-white/10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2 text-[11px] tracking-[0.25em] uppercase font-light text-white/35"
      >
        Made with love
        <motion.span
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="inline-block text-white/50"
        >
          ❤
        </motion.span>
      </motion.p>
    </footer>
  );
}