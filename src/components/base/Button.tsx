import styled from '@emotion/styled';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Inner = styled.button`
  background: none;
  color: white;
  padding: 0;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

function Button({ children, ...rest }: ButtonProps) {
  const htmlProps = rest as any;
  return <Inner {...htmlProps}>{children}</Inner>;
}

export default Button;
