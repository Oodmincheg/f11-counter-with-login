const CharactersList = ({ characterList = [] }) => {
  return (
    <>
      {characterList.map(({ name }) => (
        <div>{name}</div>
      ))}
    </>
  );
};

export default CharactersList;
