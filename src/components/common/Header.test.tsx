import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import theme from 'theme';

import Header from './Header';

jest.mock('../../ModalPortal', () => () => <div id='modal' />);

describe('<Header />', () => {
  it('has a logo', () => {
    const header = render(
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>
        ,
      </RecoilRoot>,
    );

    const logo = header.getByAltText('MJU Likelion Logo');
    expect(logo).toBeInTheDocument();
  });

  it('has a login button', () => {
    const header = render(
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>
        ,
      </RecoilRoot>,
    );

    const loginButton = header.getByText('로그인');
    expect(loginButton).toBeInTheDocument();
  });

  it('has a signin button', () => {
    const header = render(
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>
        ,
      </RecoilRoot>,
    );

    const loginButton = header.getByText('회원가입');
    expect(loginButton).toBeInTheDocument();
  });
});
