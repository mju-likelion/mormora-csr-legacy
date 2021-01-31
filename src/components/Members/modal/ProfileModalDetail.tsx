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
  overflow: overlay;

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

const SectionTitleWarp = styled.div`
  display: flex;
  padding: 20px;

  .photo {
    border-radius: 6px;
  }
`;

const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 20px;

  .name {
    padding-right: 20px;
    padding-bottom: 20px;
  }

  .subTitleContents {
    font-size: 18px;
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

const SectionSubContents = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  text-align: end;
  padding-right: 10%;
  margin: 20px 0;
`;

const SectionScroll = styled.div`
  margin-top: 13px;
  margin-right: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background: #f2f2f2;
    width: 10px;
    margin-right: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff9e1b;
    border-radius: 6px;
  }
`;

interface ProfileDetailProps {
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function ProfileDetail({ close }: ProfileDetailProps) {
  return (
    <Wrapper>
      <Modal>
        <CloseButton onClick={close}>
          <img src={icModalClose} width='16px' height='16px' alt='닫기' />
        </CloseButton>
        <SectionScroll>
          <SectionTitleWarp>
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
                <div className='subTitleContents'>컴퓨터공학과</div>
                <div className='subTitleContents'>60160000</div>
              </SectionSubTitleOption>
              <SectionSubTitleOption>
                <div className='subTitleContents'>휴대전화</div>
                <div className='subTitleContents'>010-0000-0000</div>
              </SectionSubTitleOption>
              <SectionSubTitleOption>
                <div className='subTitleContents'>이메일 </div>
                <div className='subTitleContents'>yuyaebean@gmail.com</div>
              </SectionSubTitleOption>
            </SectionTitle>
          </SectionTitleWarp>

          <Company>#Watcha</Company>
          <SectionTitle>
            <div className='subTitleContents'>웹사이트</div>
            <SectionContents>
              <div className='subTitleContents'>
                https://github.com/soultree-fly
              </div>
              <div className='subTitleContents'>
                https://github.com/soultree-fly
              </div>
            </SectionContents>
          </SectionTitle>
          <SectionSubContents>
            <div>last-update : </div>
            <div>2021-01-31</div>
          </SectionSubContents>
        </SectionScroll>
      </Modal>
    </Wrapper>
  );
}
export default ProfileDetail;
