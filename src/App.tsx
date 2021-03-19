import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import theme from './styles/theme';
import { Dashboard } from './components/Dashboard';

export function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header />
        <Dashboard />
        <GlobalStyle />
    </ThemeProvider>
  )
}
