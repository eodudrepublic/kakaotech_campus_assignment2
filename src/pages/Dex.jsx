import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";

export default function Dex() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Dashboard />      <PokemonList pokemonList={MOCK_DATA} />
    </section>
  );
}