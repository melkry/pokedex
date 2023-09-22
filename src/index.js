import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "./styles.css";

import { Navbar } from "./components/navbar/navbar";
import { Pokedex } from "./components/pokedex/pokedex";
import { Team } from "./components/team/team";
import { Footer } from "./components/footer/footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
