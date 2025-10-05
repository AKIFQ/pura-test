import { Global, css } from '@emotion/react'
import { theme } from './theme'
import './fonts.css'

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Zodiak', Georgia, serif;
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.background};
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
      }

      h1 {
        ${theme.typography.h1}
      }

      h2 {
        ${theme.typography.h2}
      }

      h3 {
        ${theme.typography.h3}
      }

      p {
        ${theme.typography.body}
      }

      a {
        text-decoration: none;
        color: inherit;
        transition: color 0.2s ease;

        &:hover {
          color: ${theme.colors.primary};
        }
      }

      button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
        ${theme.typography.button}
        transition: all 0.2s ease;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      ::selection {
        background-color: ${theme.colors.primaryDark};
        color: ${theme.colors.white};
      }
      
      /* Brutalist paint-like texture effects */
      .brush-stroke-bg {
        position: relative;
        background: ${theme.colors.dark};
        clip-path: polygon(
          0% 8%, 2% 3%, 5% 1%, 10% 0%, 15% 1%, 20% 2%, 
          25% 1%, 30% 0%, 35% 1%, 40% 0%, 45% 1%, 50% 0%,
          55% 1%, 60% 0%, 65% 2%, 70% 1%, 75% 2%, 80% 1%,
          85% 0%, 90% 2%, 95% 1%, 98% 3%, 100% 8%,
          100% 92%, 98% 97%, 95% 99%, 90% 100%, 85% 99%,
          80% 98%, 75% 99%, 70% 100%, 65% 99%, 60% 100%,
          55% 99%, 50% 100%, 45% 99%, 40% 100%, 35% 99%,
          30% 100%, 25% 99%, 20% 98%, 15% 99%, 10% 100%,
          5% 99%, 2% 97%, 0% 92%
        );
        
        &::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.02) 2px,
              rgba(255,255,255,0.02) 4px
            );
          pointer-events: none;
        }
      }
      
      .purple-brush-stroke-bg {
        position: relative;
        background: ${theme.colors.primaryDark};
        clip-path: polygon(
          0% 5%, 3% 2%, 7% 1%, 12% 0%, 18% 1%, 24% 1%, 
          30% 0%, 36% 1%, 42% 0%, 48% 1%, 54% 0%, 60% 1%,
          66% 0%, 72% 1%, 78% 1%, 84% 0%, 90% 2%, 95% 1%, 100% 5%,
          100% 95%, 97% 98%, 93% 99%, 88% 100%, 82% 99%,
          76% 99%, 70% 100%, 64% 99%, 58% 100%, 52% 99%,
          46% 100%, 40% 99%, 34% 100%, 28% 99%, 22% 100%,
          16% 99%, 10% 98%, 5% 99%, 0% 95%
        );
      }
      
      .paint-block {
        position: relative;
        background: ${theme.colors.dark};
        
        &::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: ${theme.colors.dark};
          z-index: -1;
          filter: blur(3px);
          opacity: 0.3;
        }
      }
      
      .rough-edge {
        filter: url('#roughEdgeFilter');
      }
      
      /* SVG filter for rough edges */
      svg.filters {
        position: absolute;
        width: 0;
        height: 0;
      }
    `}
  />
)