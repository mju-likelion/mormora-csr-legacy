import AuthModal from './AuthModal';

interface LoginModalProps {
  onClose: () => void;
}

function LoginModal({ onClose }: LoginModalProps) {
  return <AuthModal type='login' onClose={onClose} />;
}

export default LoginModal;
