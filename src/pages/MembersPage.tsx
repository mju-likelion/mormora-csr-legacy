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

const SectionNoneTitle = styled.div`
  font-size: 18px;
  padding-left: 20px;
  margin-top: 36px;
`;

function MembersPage() {
  const lionMembers = useRecoilValue(membersState);

  const presidents = lionMembers.filter(
    lionMember => lionMember.memberPosition === 'president',
  );
  const vicePresidents = lionMembers.filter(
    lionMember => lionMember.memberPosition === 'vicePresident',
  );
  const Managers = lionMembers.filter(
    lionMember => lionMember.memberPosition === 'manager',
  );
  const Members = lionMembers.filter(
    lionMember => lionMember.memberPosition === 'member',
  );

  return (
    <BackgroundColor>
      <SectionPadding>
        <ButtonGroup />
        <SectionTitle>대표</SectionTitle>
        {presidents.length === 0 ? (
          <SectionNoneTitle>등록된 대표가 없습니다.</SectionNoneTitle>
        ) : (
          <Profiles lionMembers={presidents} />
        )}

        {vicePresidents.length > 0 && (
          <>
            <SectionTitle>부대표</SectionTitle>
            <Profiles lionMembers={vicePresidents} />
          </>
        )}

        <SectionTitle>운영진</SectionTitle>
        {Managers.length === 0 ? (
          <SectionNoneTitle>등록된 운영진이 없습니다.</SectionNoneTitle>
        ) : (
          <Profiles lionMembers={Managers} />
        )}

        <SectionTitle>아기사자</SectionTitle>
        {Members.length === 0 ? (
          <SectionNoneTitle>등록된 멤버가 없습니다.</SectionNoneTitle>
        ) : (
          <Profiles lionMembers={Members} />
        )}
      </SectionPadding>
    </BackgroundColor>
  );
}

export default MembersPage;
