import styled from '@emotion/styled';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import StylelessButton from 'components/StylelessButton';
import UIImg from 'components/UIImg';
import icModalClose from 'images/icModalClose.svg';
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
  background-color: #303030;
  width: 375px;
  padding: 1.5rem 1.5rem 3.5rem;
  border-radius: 0.5rem;

  ${media.small} {
    flex: 1;
    justify-content: center;
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
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin: 0.5rem 0 1.5rem;
`;

const InputWrapper = styled.div`
  margin: 0 0 0.5rem;
`;

const Input = styled.input`
  background: #424242;
  width: 100%;
  height: 2.75rem;
  padding: 0 0.75rem;
  caret-color: ${props => props.theme.colors.likelionOrange};
`;

const SubmitButton = styled.button`
  background: ${props => props.theme.colors.likelionOrange};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 1.375rem;
  width: 100%;
  height: 2.75rem;
  margin: 1.25rem 0 0.625rem;
`;

const ForgotPasswordButton = styled(StylelessButton)`
  color: ${props => props.theme.colors.likelionOrange};
  margin: 0.875rem 0 0;
`;

const SwitchBlock = styled.div`
  color: #8c8c8c;
  letter-spacing: -0.2px;
  line-height: 1.25rem;
  text-align: center;
  margin: 0.875rem 0 0;
`;

const SwitchButton = styled(StylelessButton)`
  color: ${props => props.theme.colors.likelionOrange};
`;

function AuthModal() {
  const [typeText, setTypeText] = useState('');
  const [oppositeTypeText, setOppositeTypeText] = useState('');
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
      setTypeText('로그인');
      setOppositeTypeText('회원가입');
    } else if (authModal === 'signin') {
      setTypeText('회원가입');
      setOppositeTypeText('로그인');
    } else {
      setTypeText('');
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
          <UIImg src={icModalClose} width='16px' height='16px' />
        </CloseButton>
        <Title>{typeText}</Title>
        <form onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name='password'
              type='password'
              placeholder='Password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </InputWrapper>
          <SubmitButton type='submit'>{typeText}</SubmitButton>
        </form>
        {authModal === 'login' && (
          <ForgotPasswordButton type='button'>
            비밀번호를 잊어버리셨나요?
          </ForgotPasswordButton>
        )}
        <SwitchBlock>
          {authModal === 'login'
            ? '계정이 없으신가요? '
            : '이미 가입하셨나요? '}
          <SwitchButton type='button' onClick={handleSwitch}>
            {oppositeTypeText}하러 가기
          </SwitchButton>
        </SwitchBlock>
      </Modal>
    </Wrapper>
  );
}

export default AuthModal;
