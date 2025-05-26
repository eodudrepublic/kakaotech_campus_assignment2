// REQ-2 (페이지 라우팅 구현)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Dex from "@/pages/Dex";
import PokemonDetail from "@/pages/PokemonDetail";

export const PATH = { home: "/", dex: "/dex", detail: "/detail" };
export const getPath = (key) => PATH[key];

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.dex} element={<Dex />} />
        <Route path={PATH.detail + "/:id"} element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
