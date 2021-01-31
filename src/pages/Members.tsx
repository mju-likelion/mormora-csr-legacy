import styled from '@emotion/styled';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { membersState } from 'stores/membersAtom';

import ButtonGroup from '../components/Members/ButtonGroup';
import Profiles from '../components/Members/Profiles';
import media from '../lib/media';

const BackgroundColor = styled.div`
  background-color: #000;
`;

const Grid = styled.div`
  padding: 20px 200px;

  ${media.large} {
    padding: 20px 100px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  margin-top: 45px;
`;

function Members() {
  const members = useRecoilValue(membersState);

  const presidents = members.filter(
    member => member.memberPosition === 'president',
  );
  const vicePresidents = members.filter(
    member => member.memberPosition === 'vicePresident',
  );
  const Managers = members.filter(
    member => member.memberPosition === 'manager',
  );
  const Member = members.filter(member => member.memberPosition === 'member');

  return (
    <BackgroundColor>
      <Grid>
        <ButtonGroup />
        <Title>대표</Title>
        <Profiles members={presidents} />

        {vicePresidents.length > 0 && (
          <>
            <Title>부대표</Title>
            <Profiles members={vicePresidents} />
          </>
        )}

        <Title>운영진</Title>
        <Profiles members={Managers} />

        <Title>아기사자</Title>
        <Profiles members={Member} />
      </Grid>
    </BackgroundColor>
  );
}

export default Members;
