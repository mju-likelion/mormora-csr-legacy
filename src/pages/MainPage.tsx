import styled from '@emotion/styled';
import React from 'react';

const FirstImage = styled.div`
  background-image: url('https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/main_background.png');
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  height: ${props => `calc(100vh - ${props.theme.constants.headerHeight})`};

  @media (max-width: 720px) {
    background-size: cover;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 2.5rem;
  text-align: center;
  padding-top: 8rem;
  margin: 0;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

const LeftWing = styled.span`
  content: url('https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/left-wing.png');
  margin-right: 1rem;

  @media (max-width: 720px) {
    display: none;
  }
`;

const RightWing = styled.span`
  content: url('https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/right-wing.png');
  margin-left: 1rem;

  @media (max-width: 720px) {
    display: none;
  }
`;

const B = styled.span`
  font-weight: 600;
  margin-right: 8px;
`;

const MainPage: React.FC = () => {
  return (
    <FirstImage>
      <Title>
        <LeftWing />
        <B>멋쟁이 사자처럼</B> 명지대 (자연)
        <RightWing />
      </Title>
    </FirstImage>
  );
};

export default MainPage;
