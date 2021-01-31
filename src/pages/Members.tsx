import styled from '@emotion/styled';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { membersState } from 'stores/membersAtom';

import ButtonGroup from '../components/Members/ButtonGroup';
import Profiles from '../components/Members/Profiles';
import media from '../lib/media';

const BackgroundColor = styled.div`
  background-color: #000;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const SectionPadding = styled.div`
  padding: 20px 200px;

  ${media.xlarge} {
    padding: 20px 150px;
  }

  ${media.large} {
    padding: 20px 100px;
  }

  ${media.medium} {
    padding: 20px 90px;
  }

  ${media.small} {
    padding: 20px 70px;
  }

  ${media.xsmall} {
    padding: 20px;
  }
`;

const SectionTitle = styled.div`
  font-size: 24px;
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
      <SectionPadding>
        <ButtonGroup />
        <SectionTitle>대표</SectionTitle>
        <Profiles members={presidents} />

        {vicePresidents.length > 0 && (
          <>
            <SectionTitle>부대표</SectionTitle>
            <Profiles members={vicePresidents} />
          </>
        )}

        <SectionTitle>운영진</SectionTitle>
        <Profiles members={Managers} />

        <SectionTitle>아기사자</SectionTitle>
        <Profiles members={Member} />
      </SectionPadding>
    </BackgroundColor>
  );
}

export default Members;
