import styled from '@emotion/styled';

import ProfileImg from 'images/basicprofile.png';
import icModalClose from 'images/icModalClose.svg';
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

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const TitleBox = styled.div`
  display: flex;
  padding: 20px;

  .photo {
    border-radius: 6px;
  }
`;

const SectionTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  padding: 20px;

  .name {
    padding-right: 20px;
    padding-bottom: 20px;
  }

  .body {
    font-size: 20px;
    font-weight: 300;
    margin-top: 10px;
    margin-right: 10px;
  }
`;

const SectionSubTitle = styled.div`
  display: flex;
`;

const SectionSubTitleOption = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Company = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
`;

const SectionContents = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  padding-left: 20%;
`;

interface ProfileDetailProps {
  close: Function;
}
// eslint-disable-next-line react/prop-types
const ProfileDetail: React.FC<ProfileDetailProps> = ({ close }) => {
  return (
    <Wrapper>
      <Modal>
        <CloseButton>
          <img
            src={icModalClose}
            width='16px'
            height='16px'
            alt='기본 프로필'
          />
        </CloseButton>

        <TitleBox>
          <img
            src={ProfileImg}
            width='208px'
            height='195px'
            alt='기본 프로필'
          />
          <SectionTitle>
            <SectionSubTitle>
              <div className='name'>유예빈</div>
              <div className='name'>|</div>
              <div className='name'>8기 대표</div>
            </SectionSubTitle>
            <SectionSubTitleOption>
              <div className='body'>컴퓨터공학과</div>
              <div className='body'>60160000</div>
            </SectionSubTitleOption>
            <SectionSubTitleOption>
              <div className='body'>휴대전화</div>
              <div className='body'>010-0000-0000</div>
            </SectionSubTitleOption>
            <SectionSubTitleOption>
              <div className='body'>이메일 </div>
              <div className='body'>yuyaebean@gmail.com</div>
            </SectionSubTitleOption>
          </SectionTitle>
        </TitleBox>

        <Company>#Watcha</Company>
        <SectionTitle>
          <div className='body'>웹사이트</div>
          <SectionContents>
            <div className='body'>https://github.com/soultree-fly</div>
            <div className='body'>https://github.com/soultree-fly</div>
          </SectionContents>
        </SectionTitle>
      </Modal>
    </Wrapper>
  );
};
export default ProfileDetail;
