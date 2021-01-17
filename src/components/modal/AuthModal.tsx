import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import media from 'lib/media';
import { authModalState } from 'stores/headerAtom';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 606px;
  height: 480px;

  ${media.small} {
    flex: 1;
    width: auto;
    height: 100%;
  }
`;

function AuthModal() {
  const [type, setType] = useState('');
  const [oppositeType, setOppositeType] = useState('');
  const [authModal, setAuthModal] = useRecoilState(authModalState);

  useEffect(() => {
    if (authModal === 'login') {
      setType('로그인');
      setOppositeType('회원가입');
    } else if (authModal === 'signin') {
      setType('회원가입');
      setOppositeType('로그인');
    } else {
      setType('');
    }
  }, [authModal]);

  function handleClose() {
    setAuthModal('off');
  }

  function handleSwitch() {
    if (authModal === 'login') setAuthModal('signin');
    else if (authModal === 'signin') setAuthModal('login');
  }

  return (
    <Wrapper>
      <Modal>
        {type}
        <button type='button' onClick={handleClose}>
          Close Modal
        </button>
        <input name='email' type='email' placeholder='Email' />
        <input name='password' type='password' placeholder='Password' />
        <button type='submit'>{type}</button>
        <button type='button'>비밀번호 찾기</button>
        <button type='button' onClick={handleSwitch}>
          {oppositeType}
        </button>
      </Modal>
    </Wrapper>
  );
}

export default AuthModal;
