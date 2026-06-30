/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F2',
        blush: '#F7D9D0',
        'blush-deep': '#F0B8C2',
        peach: '#FBE3D4',
        beige: '#F1E4D3',
        babypink: '#FADCE3',
        lavender: '#E3D7F0',
        ink: '#5B4640',
        cocoa: '#7A5C53',
      },
      fontFamily: {
        hand: ['"Caveat"', 'cursive'],
        script: ['"Kalam"', 'cursive'],
        write: ['"Patrick Hand"', 'cursive'],
        body: ['"Quicksand"', 'sans-serif'],
      },
      backgroundImage: {
        paper: "url('/textures/paper-grain.png')",
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(122, 92, 83, 0.25)',
        polaroid: '0 6px 18px rgba(122, 92, 83, 0.18), 0 1px 3px rgba(122,92,83,.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(4deg)' },
        },
        shake: {
          '10%, 90%': { transform: 'translateX(-1px)' },
          '20%, 80%': { transform: 'translateX(2px)' },
          '30%, 50%, 70%': { transform: 'translateX(-4px)' },
          '40%, 60%': { transform: 'translateX(4px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
        sparkle: 'sparkle 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
