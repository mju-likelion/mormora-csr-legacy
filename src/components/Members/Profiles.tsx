import styled from '@emotion/styled';
import React, { useState } from 'react';

import ModalPortal from 'ModalPortal';
import ProfileImg from 'images/basicprofile.png';
import media from 'lib/media';

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

const SectionNoneTitle = styled.div`
  font-size: 18px;
  padding-left: 20px;
  margin-top: 36px;
`;

const MemberSection = styled.div`
  display: inline-block;
  background: #e5e5e5;
  width: 208px;
  height: 288px;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 6px;
  margin: 50px 90px 15px 0;
  overflow: hidden;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }

  ${media.xlarge} {
    margin: 50px 80px 15px 0;
  }

  ${media.medium} {
    margin: 50px 50px 15px 0;
  }

  ${media.small} {
    margin: 30px 20px 15px 0;
  }
`;

const MemberImg = styled.div``;

const MemberName = styled.div`
  color: #000;
  font-weight: 600;
  text-align: center;
  margin: 1rem 0 0.5rem 0;
`;

const MemberContents = styled.div`
  color: #4f4f4f;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 8px;
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
      {members.map(member => (
        <MemberSection onClick={handleOpen}>
          <MemberImg>
            <img
              src={ProfileImg}
              width='208px'
              height='195px'
              alt='기본 프로필'
            />
          </MemberImg>

          <MemberName>{member.memberName}</MemberName>
          <MemberContents>{member.memberPosition}</MemberContents>
          <MemberContents>{member.memberMajor}</MemberContents>
        </MemberSection>
      ))}
      <ModalPortal>
        {open && <ProfileModalDetail close={handleClose} />}
      </ModalPortal>
    </CardScroll>
  );
}

export default Profiles;
