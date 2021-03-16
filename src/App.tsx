import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import theme from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyle />
    </ThemeProvider>
  );
}
