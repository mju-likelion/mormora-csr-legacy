import AuthModal from './AuthModal';

interface SigninModalProps {
  onClose: () => void;
}

function SigninModal({ onClose }: SigninModalProps) {
  return <AuthModal type='signin' onClose={onClose} />;
}

export default SigninModal;
