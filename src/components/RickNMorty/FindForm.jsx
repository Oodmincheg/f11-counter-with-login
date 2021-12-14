const FindForm = ({ name, findCharacter, onNameChange }) => {
  return (
    <form>
      <input
        value={name}
        onChange={(event) => onNameChange(event.target.value)}
        placeholder="Input name..."
        name="name"
      ></input>
      <button type="button" onClick={findCharacter}>
        Find
      </button>
    </form>
  );
};

export default FindForm;
