import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const modalState = atom({
  key: 'modalState', // unique ID (with respect to other atoms/selectors)
  default: 'true', // default value (aka initial value)
});

export const showFirstState = atom({
  key: 'showFirstState',
  default: false,
});

export const userState = atom({
  key: 'userState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
