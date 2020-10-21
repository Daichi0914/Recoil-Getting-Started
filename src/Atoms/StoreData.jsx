import { atom, selector } from 'recoil';

// グローバルstate管理
export const textState = atom({
  key: 'textState', // unique ID (他の atoms/selectors に関して)
  default: '', // default value (初期値として)
});

// stateの変換
export const charCountState = selector({
  key: 'charCountState', // unique ID (他の atoms/selectors に関して)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
