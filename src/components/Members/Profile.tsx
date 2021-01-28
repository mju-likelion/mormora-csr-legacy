import styled from '@emotion/styled';
import React, { useState } from 'react';

import ModalPortal from 'ModalPortal';
import ProfileImg from 'images/basicprofile.png';

import ProfileDetail from './modal/ProfileDetail';

const Member = styled.div`
  display: inline-block;
  background: #e5e5e5;
  width: 208px;
  height: 288px;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 6px;
  margin-top: 50px;
  margin-right: 35px;
  margin-bottom: 5px;
  overflow: hidden;
  cursor: pointer;

  .photo {
    width: 100%;
  }

  .name {
    color: #000;
    font-weight: 600;
    text-align: center;
    padding-top: 16px;
    margin-bottom: 0.5rem;
  }

  .explanation {
    color: #4f4f4f;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 16px;
  }
`;

const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Member onClick={handleOpen}>
        <img src={ProfileImg} width='208px' height='195px' alt='기본 프로필' />
        <div className='name'>유예빈</div>
        <div className='explanation'>
          8기 대표
          <br />
          컴퓨터공학과
        </div>
      </Member>
      <ModalPortal>{open && <ProfileDetail close={handleClose} />}</ModalPortal>
    </>
  );
};

export default Profile;
