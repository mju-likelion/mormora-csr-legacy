import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #212121;
  color: #fafafa;
  width: 100%;
  height: 4rem;
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
  padding: 0 1.5rem;
  margin: 0;
`;

const HeaderListItem = styled.li``;

const Logo = styled.img`
  /* align-self는 safari에서 깨지는거 방지용 */
  align-self: center;
  width: 9rem;
  height: auto;
`;

const Header: React.FC = () => {
  return (
    <HeaderBlock>
      <HeaderList>
        <HeaderListItem>
          <Link to="/">
            <Logo
              src="https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/basiclogo_E_H_W.png"
              alt="MJU Likelion Logo"
            />
          </Link>
        </HeaderListItem>
      </HeaderList>
    </HeaderBlock>
  );
};

export default Header;
