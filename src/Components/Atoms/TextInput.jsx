import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../Atoms/StoreData';

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>入門編 Demo</h2>
      <p>文字を入力してください</p>
      <input type='text' value={text} onChange={onChange} />
      <br />
      エコー: {text}
    </div>
  );
};

export default TextInput;
