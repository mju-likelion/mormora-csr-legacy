import styled from '@emotion/styled';

import { mediaQuery } from 'lib/media';

interface ResponsiveProps {
  children: React.ReactNode;
  [rest: string]: any;
}

const Block = styled.div`
  width: 1728px;
  margin: 0 auto;

  ${mediaQuery(1919)} {
    width: 1376px;
  }

  ${mediaQuery(1440)} {
    width: 1024px;
  }

  ${mediaQuery(1056)} {
    width: calc(100% - 2rem);
  }
`;

function Responsive({ children, ...rest }: ResponsiveProps) {
  return <Block {...rest}>{children}</Block>;
}

export default Responsive;
