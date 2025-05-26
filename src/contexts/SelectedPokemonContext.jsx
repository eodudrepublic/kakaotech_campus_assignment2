import { createContext, useContext, useState } from "react";

export const SelectedPokemonContext = createContext(null);

export const SelectedPokemonProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  return (
    <SelectedPokemonContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedPokemonContext.Provider>
  );
};

// 커스텀 훅 – import만 하면 바로 사용
export const useSelectedPokemon = () => {
  const ctx = useContext(SelectedPokemonContext);
  if (!ctx) throw new Error("useSelectedPokemon must be used within Provider");
  return ctx;           // {selected, setSelected}
};
