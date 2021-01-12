import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

function ModalPortal({ children }: ModalPortalProps) {
  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  const body = document.querySelector('body');
  body!.appendChild(modal);

  return ReactDOM.createPortal(children, modal);
}

export default ModalPortal;
