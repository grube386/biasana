import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: '#005e58',
          dark: '#04524c',
          mid: '#257066',
          base: '#2f9688',
          bright: '#2f9688',
          light: '#38817d',
        },
        sage: {
          mist: '#abcdc3',
          soft: '#dbe9e3',
          paper: '#f5f8f6',
        },
        cream: '#faf7f2',
        paper: '#f5f0e8',
        rule: '#e6e0d4',
        muted: '#8ba19d',
        ink: {
          DEFAULT: '#1a2a28',
          soft: '#4a5d5a',
          mute: '#6b7875',
        },
      },
      fontFamily: {
        display: ['var(--font-baloo2)', 'Georgia', 'serif'],
        serif: ['var(--font-fraunces)', 'Fraunces', 'Cormorant Garamond', 'serif'],
        body: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        glory: ['var(--font-glory)', 'cursive'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 7vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.25rem, 5.5vw, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.12' }],
        'eyebrow': ['0.72rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      maxWidth: {
        prose: '38rem',
        wide: '76rem',
        reading: '46rem',
      },
      spacing: {
        'section': 'clamp(4rem, 9vw, 8rem)',
        'section-sm': 'clamp(2.5rem, 6vw, 5rem)',
      },
      borderRadius: {
        organic: '42% 58% 55% 45% / 52% 48% 52% 48%',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0,94,88,0.04), 0 24px 60px -30px rgba(0,94,88,0.18)',
        'card': '0 1px 2px rgba(0,94,88,0.06), 0 12px 40px -16px rgba(0,94,88,0.14)',
      },
      animation: {
        'breathe': 'breathe 7s ease-in-out infinite',
        'rise': 'rise 1.2s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'veil': 'veil 2.4s ease-out both',
        'fade-in': 'fadeIn 800ms cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.06)', opacity: '0.75' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        veil: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
