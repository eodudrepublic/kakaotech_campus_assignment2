// 목록 카드에서 '추가' 역할 – 중복/초과 시 alert
import styled from "styled-components";
import Button from "./Button";
import { SELECTABLE_POKEMON_NUM } from "../../constants/constant";

const SelectButton = ({ pokemon, selected, setSelected }) => {
  const selectHandler = () => {
    const isMaxSelect = selected.length >= SELECTABLE_POKEMON_NUM;
    const isAlreadySelected = selected.some(
      (sel) => sel.id === pokemon.id
    );

    // 선택 제한 & 중복 방지 메시지 분리 (REQ-5)
    if (isAlreadySelected) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (isMaxSelect) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }

    // 새 배열로 상태 갱신
    setSelected([...selected, pokemon]);
  };

  return (
    <StyledButton className="selectButton" onClick={selectHandler}>
      추가
    </StyledButton>
  );
};

export default SelectButton;


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
