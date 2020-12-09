import { ThemeProvider } from '@emotion/react';

import Header from 'components/common/Header';
import Routes from 'routes';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
