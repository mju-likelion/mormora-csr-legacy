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
  default: [],
});
