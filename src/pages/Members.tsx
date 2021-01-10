import styled from '@emotion/styled';
import React from 'react';

import Button from '../components/Members/Button';
import Profile from '../components/Members/Profile';

const BackColor = styled.div`
  background-color: #000000;
`;

const Grid = styled.div`
  padding: 20px 100px 16px 100px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 48px;
`;

const Members: React.FC = () => {
  return (
    <BackColor>
      <Grid>
        <Button />

        <Title>대표</Title>
        <Profile />
        {ByPresident()}
        <Title>운영진</Title>
        <Profile />
        <Title>아기사자</Title>
        <Profile />
      </Grid>
    </BackColor>
  );
};

const ByPresident = () => {
  return (
    <>
      <Title>부대표</Title>
      <Profile />
    </>
  );
};

export default Members;
