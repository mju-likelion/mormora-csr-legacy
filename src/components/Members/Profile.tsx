import styled from '@emotion/styled';
import React from 'react';

const Member = styled.div`
  width: 208px;
  height: 288px;
  background: #e5e5e5;
  border-radius: 6px;
  margin-bottom: 48px;
  .profile {
    width: 208px;
    height: 195px;
    border-radius: 6px;
  }
  .name {
    color: #000000;
    text-align: center;
    font-weight: 600;
    padding: 16px 0px 0px;
    margin-bottom: 0.5rem;
  }
  .explanation {
    color: #4f4f4f;
    text-align: center;
    font-weight: 400;
    line-height: 1.3;
    font-size: 12px;
    margin: 0px 0px 16px;
  }
`;

const Profile: React.FC = () => {
  return (
    <Member>
      <img
        src="/static/image/basicprofile.png"
        alt="기본 프로필"
        className="profile"
      />
      <div className="name">유예빈</div>
      <div className="explanation">
        8기 대표
        <br />
        컴퓨터공학과
      </div>
    </Member>
  );
};

export default Profile;
