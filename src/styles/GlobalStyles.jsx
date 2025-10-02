import { Global, css } from '@emotion/react'
import { theme } from './theme'

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
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
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
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
      
      /* Brutalist paint-like texture effects */
      .texture-block {
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.03) 50%, transparent 52%);
          pointer-events: none;
        }
      }
    `}
  />
)