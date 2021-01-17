import styled from '@emotion/styled';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
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
  padding: 1.5rem 2rem 2rem 2rem;

  ${media.small} {
    flex: 1;
    width: auto;
    height: 100%;
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;

  &:hover {
    svg {
      cursor: pointer;
    }
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.likelionOrange};
  font-size: 1.5rem;
  text-align: center;
`;

function AuthModal() {
  const [type, setType] = useState('');
  const [oppositeType, setOppositeType] = useState('');
  const [authModal, setAuthModal] = useRecoilState(authModalState);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

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
        <CloseButton onClick={handleClose}>
          <MdClose />
        </CloseButton>
        <Title>{type}</Title>
        <form onSubmit={formik.handleSubmit}>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type='submit'>{type}</button>
        </form>
        <button type='button'>비밀번호 찾기</button>
        <button type='button' onClick={handleSwitch}>
          {oppositeType}
        </button>
      </Modal>
    </Wrapper>
  );
}

export default AuthModal;
