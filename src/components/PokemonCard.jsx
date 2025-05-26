// 카드 하나 – 리스트/대시보드 두 곳에서 재사용
import { useNavigate } from "react-router-dom";
import { getPath } from "../router/index.jsx";
import SelectButton from "./Button/SelectButton";
import RemoveButton from "./Button/RemoveButton";
import styled from "styled-components";

const PokemonCard = ({ pokemon, selected, setSelected, type }) => {
  const navigate = useNavigate();
  const { img_url, korean_name, id, types } = pokemon;

  // 카드 바깥 영역 클릭 시 디테일 페이지로 이동
  const moveDetail = (e) => {
    if (!e.currentTarget.classList.contains("pokemonCard")) return;
    navigate(getPath("detail") + `/${id}`);
  };

  return (
    <StyledCard className="pokemonCard" onClick={moveDetail}>
      <img src={img_url} alt={`${korean_name} 이미지`} />
      <StyledName>{korean_name}</StyledName>
      {/* REQ-3: 타입 표시 추가 */}
      <p>{types.join(", ")}</p>
      <p>No. {`${id}`.padStart(3, "0")}</p>

      {type === "inSelectList" ? (
        <SelectButton
          pokemon={pokemon}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <RemoveButton
          pokemon={pokemon}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </StyledCard>
  );
};

export default PokemonCard;


const StyledCard = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 10px;
  box-shadow: 0 3px 5px var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: white;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 5px 8px var(--grey);
    transform: translateY(-5px);
    transition: 0.1s;
  }
`;

const StyledName = styled.p`
  font-weight: 600;
`;
