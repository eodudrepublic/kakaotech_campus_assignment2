import { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";

export default function Dex() {
  // REQ-3 | REQ-5 : 상태를 Dex가 소유 (prop drilling)
  const [selected, setSelected] = useState([]);

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Dashboard selected={selected} setSelected={setSelected} />
      <PokemonList
        pokemonList={MOCK_DATA}
        selected={selected}
        setSelected={setSelected}
      />
    </section>
  );
}
