/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'tablet': '810px',
      'md': '810px',
      'lg': '1024px',
      'desktop': '1280px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        brand: {
          primary: '#F7803C',
          hover: '#FF8D4D',
          active: '#EF6000',
          deep: '#BA561D',
          link: '#CF6325',
          tint: {
            100: '#FFF9F7',
            200: '#FEFBF5',
            300: '#FDF4E7',
            400: '#FCF3ED',
            500: '#FFE2D7'
          }
        },
        surface: {
          canvas: '#FFFFFF',
          light: {
            50: '#FAFAFA',
            100: '#F7F7F8',
            200: '#F5F5F5',
            300: '#F2F4F7',
            400: '#EBECED'
          },
          dark: {
            900: '#0F0F10',
            850: '#131316',
            800: '#1A1C1E',
            700: '#222222',
            600: '#2C2D30'
          }
        },
        content: {
          primary: '#000000',
          secondary: '#111111',
          tertiary: '#404245',
          muted: '#777777',
          subtle: '#80858F',
          inverse: '#FFFFFF'
        },
        border: {
          subtle: '#CFD1D5',
          light: '#DDDDDD',
          dark: '#2C2D30',
          hairline: 'rgba(0, 0, 0, 0.08)'
        },
        domain: {
          purple: {
            base: '#7A72F1',
            dark: '#312B83',
            light: '#B3AEF7',
            bg: '#F3F3FF',
            border: '#E5E6FF'
          },
          lime: {
            base: '#DAFF85',
            dark: '#0A7A22',
            light: '#DFFF7B',
            bg: '#F9FFE7',
            border: '#D5F5A3'
          },
          cyan: {
            base: '#6BD4EB',
            dark: '#1970C2',
            light: '#D4F1F8',
            bg: '#F4F9FF',
            border: '#C9DFFF'
          },
          amber: {
            base: '#FABB00',
            dark: '#7C7000',
            light: '#FFE094',
            bg: '#FFF9EA',
            border: '#FCE5B2'
          },
          rose: {
            base: '#F7C7C8',
            dark: '#A30F0F',
            light: '#FFE2D7',
            bg: '#FFF9F7',
            border: '#FFD9D9'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"Fragment Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      fontSize: {
        'h1-desktop': ['54px', { lineHeight: '1.2', letterSpacing: '-1.5px', fontWeight: '600' }],
        'h1-tablet': ['40px', { lineHeight: '1.2', letterSpacing: '-1.5px', fontWeight: '600' }],
        'h1-mobile': ['36px', { lineHeight: '1.2', letterSpacing: '-0.8px', fontWeight: '600' }],
        'h2-desktop': ['40px', { lineHeight: '1.3', letterSpacing: '-1.0px', fontWeight: '600' }],
        'h2-tablet': ['30px', { lineHeight: '1.3', letterSpacing: '-1.0px', fontWeight: '600' }],
        'h2-mobile': ['24px', { lineHeight: '1.3', letterSpacing: '-1.0px', fontWeight: '600' }],
        'h3-desktop': ['28px', { lineHeight: '1.3', letterSpacing: '-0.5px', fontWeight: '600' }],
        'h3-tablet': ['24px', { lineHeight: '1.3', letterSpacing: '-0.5px', fontWeight: '600' }],
        'h3-mobile': ['20px', { lineHeight: '1.3', letterSpacing: '-0.5px', fontWeight: '600' }],
        'h4-desktop': ['24px', { lineHeight: '1.35', letterSpacing: '-0.4px', fontWeight: '600' }],
        'h4-tablet': ['20px', { lineHeight: '1.35', letterSpacing: '-0.4px', fontWeight: '600' }],
        'h4-mobile': ['18px', { lineHeight: '1.35', letterSpacing: '-0.4px', fontWeight: '600' }],
        'eyebrow': ['16px', { lineHeight: '1.2', letterSpacing: '2.0px', fontWeight: '600' }],
        'eyebrow-sm': ['12px', { lineHeight: '1.2', letterSpacing: '2.0px', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.5', letterSpacing: '-0.1px' }],
        'body-md': ['16px', { lineHeight: '1.6', letterSpacing: '-0.04px' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0px' }]
      },
      borderRadius: {
        'pill': '120px',
        'banner': '48px',
        'banner-tablet': '32px',
        'banner-mobile': '24px',
        'sub-banner': '36px',
        'sub-banner-tablet': '28px',
        'sub-banner-mobile': '20px',
        'container': '16px',
        'card': '12px',
        'control': '8px',
        'badge': '6px'
      },
      boxShadow: {
        'subtle': '0px 2px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)',
        'card': '0px 2px 10px -3px rgba(153, 153, 153, 0.25)',
        'floating': '0px 10px 30px -10px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'drawer': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow-coral': '0px 0px 24px 0px rgba(247, 128, 60, 0.25)',
        'carousel-card': '0px 4px 20px 0px rgba(0, 0, 0, 0.06)'
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(180deg, #FBFBFB 0%, rgba(217, 217, 217, 0) 100%)',
        'workbench-pearlescent': 'linear-gradient(270deg, #F0FCFF 0%, #FFFFFF 50%, #FCEBE1 105%)',
        'card-subtle': 'linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%)',
        'timeline-glow': 'linear-gradient(270deg, #FFE2D7 0%, rgba(141, 228, 255, 0.36) 100%)',
        'cta-horizon': 'linear-gradient(90deg, rgba(199, 243, 255, 0.38) 25%, #F7C7C8 100%)',
        'stat-cobalt': 'linear-gradient(225deg, rgba(25, 112, 194, 0.1) 0%, #1970C2 100%)',
        'stat-crimson': 'linear-gradient(202deg, rgba(163, 15, 15, 0.1) 0%, #A30F0F 100%)',
        'stat-emerald': 'linear-gradient(202deg, rgba(17, 143, 44, 0.1) 0%, #0A7A22 94%)',
        'stat-graphite': 'linear-gradient(202deg, rgba(34, 34, 34, 0.1) 0%, #222222 94%)',
        'footer-fade': 'linear-gradient(180deg, #FFFFFF 31%, #EEEEEE 100%)'
      },
      maxWidth: {
        'page': '1280px',
        'content': '1160px',
        'narrow': '1040px',
        'tablet': '640px',
        'mobile': '420px'
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: []
};
