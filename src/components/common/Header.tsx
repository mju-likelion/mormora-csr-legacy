import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Responsive from 'components/base/Responsive';

const Block = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #212121;
  color: #fafafa;
  width: 100%;
`;

const Inner = styled(Responsive)`
  display: flex;
  align-items: center;
  list-style: none;
  height: ${({ theme }) => theme.constants.headerHeight};
`;

const Left = styled.div``;

const Logo = styled.img`
  /* align-self는 safari에서 깨지는거 방지용 */
  align-self: center;
  width: ${({ theme }) => theme.constants.logoWidth};
  height: auto;
`;

function Header() {
  return (
    <Block>
      <Inner>
        <Left>
          <Link to="/">
            <Logo
              src="https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/basiclogo_E_H_W.png"
              alt="MJU Likelion Logo"
            />
          </Link>
        </Left>
      </Inner>
    </Block>
  );
}

export default Header;
