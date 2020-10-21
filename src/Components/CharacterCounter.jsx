import React from 'react';
import TextInput from './Atoms/TextInput';
import CharacterCount from './Atoms/CharacterCount';

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
