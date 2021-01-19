import styled from '@emotion/styled';

import media from 'lib/media';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 606px;
  height: 480px;

  ${media.small} {
    flex: 1;
    width: auto;
    height: 100%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  padding: 20px;

  .photo {
    border-radius: 6px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  padding: 20px;

  .subTitle {
    display: flex;
  }

  .name {
    padding: 20px;
  }

  .option {
    font-size: 25px;
    font-weight: 500;
    padding: 20px;
  }

  .body {
    font-size: 20px;
    font-weight: 300;
    margin-top: 10px;
    margin-right: 10px;
  }
`;

const Company = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
`;

const Body = styled.div`
  font-size: 20px;

  .subBody {
    display: flex;
  }

  .subOption {
    display: block;
  }

  .name {
    margin: 20px 20px 20px 20px;
  }

  .option {
    margin: 15px;
  }
`;

const ProfileDetail = () => {
  return (
    <Wrapper>
      <Modal>
        <TitleBox>
          <img
            src='/static/image/basicprofile.png'
            alt='기본 프로필'
            className='photo'
          />
          <Title>
            <div className='subTitle'>
              <div className='name'>유예빈</div>
              <div className='option'>8기 대표</div>
            </div>
            <div className='subTitle'>
              <div className='body'>컴퓨터공학과</div>
              <div className='body'>60160000</div>
            </div>
            <div className='subTitle'>
              <div className='body'>휴대전화</div>
              <div className='body'>010-0000-0000</div>
            </div>
            <div className='subTitle'>
              <div className='body'>이메일 </div>
              <div className='body'>yuyaebean@gmail.com</div>
            </div>
          </Title>
        </TitleBox>

        <Company>#Watcha</Company>
        <Body>
          <div className='subBody'>
            <div className='name'>웹사이트</div>
            <div className='subOption'>
              <div className='option'>https://github.com/soultree-fly</div>
              <div className='option'>https://github.com/soultree-fly</div>
            </div>
          </div>
        </Body>
      </Modal>
    </Wrapper>
  );
};
export default ProfileDetail;
