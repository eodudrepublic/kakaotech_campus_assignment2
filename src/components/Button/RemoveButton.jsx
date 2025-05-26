import styled from "styled-components";
import Button from "./Button";

const RemoveButton = ({ pokemon, selected, setSelected }) => {
  const removeHandler = (e) => {
    e.stopPropagation();  
    const removedList = selected.filter((selected) => selected.id !== pokemon.id);

    setSelected(removedList);
  };

  return (
    <StyledButton className="removeButton" onClick={removeHandler}>
      삭제
    </StyledButton>
  );
};

export default RemoveButton;

const StyledButton = styled(Button)`
  width: 45px;
  height: 23px;
  line-height: 23px;

  border-style: none;
  border-radius: 3px;
  background-color: var(--pink-primary);

  color: white;
  font-weight: 400;

  &:hover {
    background-color: var(--pink-hover);
    cursor: pointer;
  }
`;
