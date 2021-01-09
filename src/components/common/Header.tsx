import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ModalPortal from 'ModalPortal';
import Button from 'components/base/Button';
import Responsive from 'components/base/Responsive';
import LoginModal from 'components/modal/LoginModal';
import SigninModal from 'components/modal/SigninModal';

const Block = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #212121;
  color: #fafafa;
  width: 100%;
`;

const Inner = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: ${({ theme }) => theme.constants.headerHeight};
`;

const Left = styled.div``;

const Logo = styled.img`
  /* align-self는 safari에서 깨지는거 방지용 */
  align-self: center;
  width: ${({ theme }) => theme.constants.logoWidth};
  height: auto;
`;

const Right = styled.div``;

const LoginButton = styled(Button)`
  padding: 0.5rem 1rem;
`;

const RegisterButton = styled(LoginButton)`
  border: 0.75px solid gray;
  border-radius: 8px;
`;

function Header() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signinModalOpen, setSigninModalOpen] = useState(false);

  function toggleLoginOpen() {
    setLoginModalOpen(prev => !prev);
  }

  function toggleSigninOpen() {
    setSigninModalOpen(prev => !prev);
  }

  return (
    <>
      <Block>
        <Inner>
          <Left>
            <Link to="/">
              <Logo
                src="https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/basiclogo_E_H_W.png"
                alt="MJU Likelion Logo"
              />
            </Link>
          </Left>
          <Right>
            <LoginButton onClick={toggleLoginOpen}>로그인</LoginButton>
            <RegisterButton onClick={toggleSigninOpen}>회원가입</RegisterButton>
          </Right>
        </Inner>
      </Block>
      <ModalPortal>
        {loginModalOpen && <LoginModal onClose={toggleLoginOpen} />}
        {signinModalOpen && <SigninModal onClose={toggleSigninOpen} />}
      </ModalPortal>
    </>
  );
}

export default Header;
