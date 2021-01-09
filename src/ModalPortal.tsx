import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

function ModalPortal({ children }: ModalPortalProps) {
  const el = document.getElementById('modal');
  if (!el) {
    throw Error('#modal is not exist on index.html');
  }
  return ReactDOM.createPortal(children, el);
}

export default ModalPortal;
