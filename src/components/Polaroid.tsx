import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PolaroidProps {
  src: string;
  alt?: string;
  caption?: string;
  rotate?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  pin?: 'tape' | 'clip' | 'none';
}

const sizes = {
  sm: 'w-36 sm:w-44',
  md: 'w-48 sm:w-60',
  lg: 'w-64 sm:w-80',
};

export default function Polaroid({
  src,
  alt = '',
  caption,
  rotate = -4,
  className,
  size = 'md',
  pin = 'tape',
}: PolaroidProps) {
  return (
    <motion.div
      className={cn('relative bg-white p-3 pb-6 shadow-polaroid select-none', sizes[size], className)}
      style={{ rotate }}
      whileHover={{ scale: 1.06, rotate: 0, y: -8, boxShadow: '0 22px 40px rgba(122,92,83,0.32)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      {pin === 'tape' && (
        <span className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 rotate-[-3deg] rounded-sm" />
      )}
      {pin === 'clip' && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl">📎</span>
      )}
      <div className="aspect-square w-full overflow-hidden bg-beige">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = '0.35';
          }}
        />
      </div>
      {caption && (
        <p className="mt-2 text-center font-hand text-lg text-cocoa leading-tight">{caption}</p>
      )}
    </motion.div>
  );
}
