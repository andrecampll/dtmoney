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
  `}
`;
