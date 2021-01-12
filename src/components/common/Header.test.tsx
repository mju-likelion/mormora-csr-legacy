import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import theme from 'theme';

import Header from './Header';

describe('<Header />', () => {
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

  it('has a login button', () => {
    const header = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const loginButton = header.getByText('로그인');
    expect(loginButton).toBeInTheDocument();
  });

  it('has a signin button', () => {
    const header = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const loginButton = header.getByText('회원가입');
    expect(loginButton).toBeInTheDocument();
  });
});
