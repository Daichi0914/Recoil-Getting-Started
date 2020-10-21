import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../../Atoms/StoreData';

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>文字数: {count}</>;
};

export default CharacterCount;
