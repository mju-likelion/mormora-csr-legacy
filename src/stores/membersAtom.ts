import { atom } from 'recoil';

interface MemberState {
  memberId: Number;
  memberName: String;
  memberImg: String;
  memberPosition: 'member' | 'manager' | 'president' | 'vicePresident';
  memberMajor: String;
}

export const membersState = atom<MemberState[]>({
  key: 'membersState',
  default: [
    {
      memberId: 1,
      memberName: '홍승현',
      memberImg: 'images/basicprofile.png',
      memberPosition: 'president',
      memberMajor: '기계공학과',
    },
  ],
});
