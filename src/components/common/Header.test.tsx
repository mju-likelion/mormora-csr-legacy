import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import theme from 'theme';

import Header from './Header';

describe('<Header />', () => {
  it('matches snapshot', () => {
    const header = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(header.container).toMatchSnapshot();
  });

  it('has a logo', () => {
    const header = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const logo = header.getByAltText('MJU Likelion Logo');
    expect(logo).toBeInTheDocument();
  });
});
