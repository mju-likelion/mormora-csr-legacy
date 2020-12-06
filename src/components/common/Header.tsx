import styled from '@emotion/styled';
import React from 'react';

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #212121;
  color: #fafafa;
  width: 100%;
  height: 4rem;
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header: React.FC = () => {
  return (
    <>
      <HeaderBlock>Test</HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
