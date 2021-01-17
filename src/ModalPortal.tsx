import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

function ModalPortal({ children }: ModalPortalProps) {
  const modal = document.getElementById('modal');
  if (!modal) {
    throw Error('#modal is not exist on index.html');
  }

  return ReactDOM.createPortal(children, modal);
}

export default ModalPortal;
