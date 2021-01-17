import { atom } from 'recoil';

export const authModalState = atom<'off' | 'login' | 'signin'>({
  key: 'AuthModal',
  default: 'off',
});
