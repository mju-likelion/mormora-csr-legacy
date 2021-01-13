import styled from '@emotion/styled';

import media from 'lib/media';

interface AuthModalProps {
  type: 'login' | 'signin';
  onClose: () => void;
}

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

function AuthModal({ type, onClose }: AuthModalProps) {
  return (
    <Wrapper>
      <Modal>
        {type === 'login' ? '로그인' : '회원가입'}
        <button type='button' onClick={onClose}>
          Close Modal
        </button>
        <input name='email' type='email' placeholder='Email' />
        <input name='password' type='password' placeholder='Password' />
        <button type='submit'>
          {type === 'login' ? '로그인' : '회원가입'}
        </button>
        <button type='button'>비밀번호 찾기</button>
        <button type='button'>
          {type === 'login' ? '회원가입' : '로그인'}
        </button>
      </Modal>
    </Wrapper>
  );
}

export default AuthModal;
