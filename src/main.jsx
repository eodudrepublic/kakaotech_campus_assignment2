import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/common.styles";
import { SelectedPokemonProvider } from "./contexts/SelectedPokemonContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <SelectedPokemonProvider>
      <App />
    </SelectedPokemonProvider>
  </>,
);
