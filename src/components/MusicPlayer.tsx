import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { MUSIC_SRC } from '@/constants/content';

export default function MusicPlayer({ autoStart }: { autoStart: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (autoStart && audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, [autoStart]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  const onVolume = (v: number) => {
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="paper-card shadow-soft rounded-2xl p-4 w-56 border border-blush"
          >
            <p className="font-hand text-xl text-cocoa mb-2">Teenage Dream 🎶</p>
            <div className="flex items-center gap-3">
              <button onClick={toggle} className="text-cocoa text-lg" aria-label="play-pause">
                {playing ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={toggleMute} className="text-cocoa text-lg" aria-label="mute">
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => onVolume(parseFloat(e.target.value))}
                className="flex-1 accent-blush-deep"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="h-12 w-12 rounded-full bg-blush-deep text-white shadow-soft flex items-center justify-center animate-float-slow"
        aria-label="music controls"
      >
        <FaMusic />
      </motion.button>
      <audio ref={audioRef} src={MUSIC_SRC} loop />
    </div>
  );
}
