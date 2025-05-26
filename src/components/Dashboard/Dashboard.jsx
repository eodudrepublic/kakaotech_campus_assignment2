// 선택된 6마리를 보여주는 영역 – 남은 칸은 빈 Slot
import Slot from "./Slot";
import PokemonCard from "../PokemonCard";
import { SELECTABLE_POKEMON_NUM } from "../../constants/constant";
import styled from "styled-components";

const Dashboard = ({ selected, setSelected }) => {
  return (
    <StyledContainer>
      <StyledTitle>나만의 포켓몬</StyledTitle>

      {/* 6칸을 고정으로 렌더링해서, 선택 여부에 따라 Slot <-> Card 토글 */}
      <StyledSlotContainer>
        {Array.from({ length: SELECTABLE_POKEMON_NUM }, (_, i) =>
          selected[i] ? (
            <PokemonCard
              key={selected[i].id}
              pokemon={selected[i]}
              type="inDashboard"
              selected={selected}
              setSelected={setSelected}
            />
          ) : (
            <Slot key={i} />
          )
        )}
      </StyledSlotContainer>
    </StyledContainer>
  );
};

export default Dashboard;


const StyledContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: var(--light-grey);
  border-radius: 10px;
  padding: 20px;
`;

const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 25px;
`;

const StyledSlotContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  column-gap: 10px;
`;
