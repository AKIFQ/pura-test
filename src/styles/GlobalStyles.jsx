import { Global, css } from '@emotion/react'
import { theme } from './theme'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.background};
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
        color: ${theme.colors.text.primary};
      }
    `}
  />
)