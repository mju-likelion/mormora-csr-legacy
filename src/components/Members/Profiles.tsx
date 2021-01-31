import styled from '@emotion/styled';
import React, { useState } from 'react';

import ModalPortal from 'ModalPortal';
import ProfileImg from 'images/basicprofile.png';

import ProfileModalDetail from './modal/ProfileModalDetail';

const CardScroll = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    background: #f2f2f2;
    height: 8px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff9e1b;
    border-radius: 6px;
  }
`;

const Member = styled.div`
  display: inline-block;
  background: #e5e5e5;
  width: 208px;
  height: 288px;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 6px;
  margin-top: 50px;
  margin-right: 100px;
  margin-bottom: 5px;
  overflow: hidden;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }

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

interface ProfilesProps {
  members: {
    memberId: Number;
    memberName: String;
    memberImg: String;
    memberPosition: 'member' | 'manager' | 'president' | 'vicePresident';
    memberMajor: String;
  }[];
}

function Profiles({ members }: ProfilesProps) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <CardScroll>
      {members.length === 0 && <div>등록된 멤버가 없습니다.</div>}
      {members.map(member => (
        <Member onClick={handleOpen}>
          <img
            src={ProfileImg}
            width='208px'
            height='195px'
            alt='기본 프로필'
          />
          <div className='name'>{member.memberName}</div>
          <div className='explanation'>
            {member.memberPosition}
            <br />
            {member.memberMajor}
          </div>
        </Member>
      ))}
      <ModalPortal>
        {open && <ProfileModalDetail close={handleClose} />}
      </ModalPortal>
    </CardScroll>
  );
}

export default Profiles;
