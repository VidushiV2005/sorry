import { cn } from '@/lib/utils';

type StickerKind = '💖' | '✨' | '🌸' | '⭐' | '🎀' | '🦋' | '💌' | '🌷' | '💫' | '🍓';

interface StickerProps {
  kind: StickerKind;
  className?: string;
  size?: number;
  spin?: boolean;
}

export default function Sticker({ kind, className, size = 28, spin = false }: StickerProps) {
  return (
    <span
      className={cn(
        'pointer-events-none select-none inline-block drop-shadow-sm',
        spin && 'animate-float',
        className
      )}
      style={{ fontSize: size }}
      aria-hidden
    >
      {kind}
    </span>
  );
}
