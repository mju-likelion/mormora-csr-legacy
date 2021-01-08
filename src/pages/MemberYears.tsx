import styled from '@emotion/styled';
import React from 'react';

const BackImage = styled.div`
  background-color: black;
`;

const B = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const MemberYears: React.FC = () => {
  return (
    <BackImage>
      <B>MemberYears</B>;
    </BackImage>
  );
};

export default MemberYears;
