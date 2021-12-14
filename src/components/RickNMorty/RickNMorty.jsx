import { useState } from 'react';
import CharacterList from './CharactersList';
import FindForm from './FindForm';

const RickNMorty = () => {
  return (
    <>
      <div>RickNMorty</div>
      <FindForm />
      <CharacterList />
    </>
  );
};

export default RickNMorty;
