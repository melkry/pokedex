import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./features/pokemon/pokemonSlice";
import speciesReducer from "./features/species/speciesSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    species: speciesReducer
  }
});
