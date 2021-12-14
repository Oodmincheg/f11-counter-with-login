import { useSelector } from 'react-redux';

const CharactersList = () => {
  const characterList = useSelector((state) => state.rickNMorty.charactersList);
  return (
    <>
      {characterList.map(({ name }) => (
        <div>{name}</div>
      ))}
    </>
  );
};

export default CharactersList;
