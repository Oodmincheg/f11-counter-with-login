import { useState } from 'react';
import CharacterList from './CharactersList';
import FindForm from './FindForm';

const RickNMorty = () => {
  const [characterList, setCharacterList] = useState([]);
  const [name, setName] = useState('');
  const findCharacter = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => res.json())
      .then((data) => setCharacterList(data.results));
  };

  return (
    <>
      <div>RickNMorty</div>
      <FindForm
        name={name}
        onNameChange={setName}
        findCharacter={findCharacter}
      />
      <CharacterList characterList={characterList} />
    </>
  );
};

export default RickNMorty;
