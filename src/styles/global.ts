import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

export const GlobalStyle: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    body {    
      background-color: ${theme.colors.mainBg};
    }

    body,
    input,
    button,
    textarea {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: ${theme.font.bold};
    }

    button {
      border: 0;
      cursor: pointer;
    }

    [disable] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%; //15px
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    .react-modal-overlay {
      background: rgba(0,0,0,0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: ${theme.colors.mainBg};
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
    }

    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;
      transition: 0.3s filter;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`;
