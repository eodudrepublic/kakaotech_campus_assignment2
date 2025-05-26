// Pokemon Dex의 루트 페이지 ─ Dashboard(선택된 포켓몬) + PokemonList(전체 목록)를 보여준다.
import { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";

export default function Dex() {
  // 선택된 포켓몬 배열 (최대 6) – prop drilling 방식으로 하위에 전달
  const [selected, setSelected] = useState([]);

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* 상단: 내가 고른 포켓몬 6칸 */}
      <Dashboard selected={selected} setSelected={setSelected} />
      {/* 하단: 전체 포켓몬 목록 */}
      <PokemonList
        pokemonList={MOCK_DATA}
        selected={selected}
        setSelected={setSelected}
      />
    </section>
  );
}
