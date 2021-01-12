import styled from '@emotion/styled';
import React from 'react';

const Member = styled.button`
  cursor: pointer;
  width: 208px;
  height: 288px;
  background: #e5e5e5;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 6px;
  margin-top: 50px;
  margin-right: 35px;
  margin-bottom: 5px;
  padding: 0px 0px;
  .profile {
    margin-top: 2px;
    width: 203px;
    height: 195px;
    border-radius: 6px;
    transition: transform 0.2s;
    :hover {
      -ms-transform: scale(1.03);
      -webkit-transform: scale(1.03);
      transform: scale(1.03);
    }
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
