import styled from '@emotion/styled';

import media from 'lib/media';

interface AuthModalProps {
  type: 'login' | 'signin';
  onClose: () => void;
}

const ModalFullScreen = styled.div`
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

const ModalBlock = styled.div`
  display: flex;
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
    <ModalFullScreen>
      <ModalBlock>
        {type} Modal
        <button type="button" onClick={onClose}>
          Close Modal
        </button>
      </ModalBlock>
    </ModalFullScreen>
  );
}

export default AuthModal;
