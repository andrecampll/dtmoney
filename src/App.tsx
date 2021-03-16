import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <h1>asdkaksd</h1>
      
      <GlobalStyle />
    </div>
    </ThemeProvider>
  );
}
