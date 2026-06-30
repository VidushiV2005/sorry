import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import PasswordScreen from '@/sections/PasswordScreen';
import Hero from '@/sections/Hero';
import Memories from '@/sections/Memories';
import ThingsILove from '@/sections/ThingsILove';
import LoveNotes from '@/sections/LoveNotes';
import Reasons from '@/sections/Reasons';
import Promises from '@/sections/Promises';

import FinalForgive from '@/sections/FinalForgive';
import Footer from '@/sections/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import CustomCursor from '@/components/CustomCursor';
import FloatingDecor from '@/components/FloatingDecor';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  useSmoothScroll(unlocked);

  const handleUnlock = () => {
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
    setTimeout(() => setUnlocked(true), 500);
  };

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div key="lock" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <PasswordScreen onUnlock={handleUnlock} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <FloatingDecor count={6} />
            <Hero />
            <Memories />
            <ThingsILove />
            <LoveNotes />
            <Reasons />
            <Promises />
            
            <FinalForgive />
            <Footer />
            <MusicPlayer autoStart />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
