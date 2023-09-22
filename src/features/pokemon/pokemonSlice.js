import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (query, thunkAPI) => {
    const url = "https://pokeapi.co/api/v2/";
    const response = await fetch(`${url}${query}`).then((data) => data.json());
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isLoading: false,
    isError: false,
    pokemon: {
      name: "Loading",
      id: 0,
      spriteUrl: "",
      types: [],
      weight: 0,
      height: 0,
      abilities: [],
      stats: {
        hp: 0,
        atk: 0,
        def: 0,
        spAtk: 0,
        spDef: 0,
        spd: 0
      }
    }
  },
  extraReducers: {
    [getPokemon.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getPokemon.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.pokemon = {
        name: action.payload.name,
        id: action.payload.id,
        spriteUrl: action.payload.sprites.front_default,
        types: action.payload.types.map((x) => x.type.name),
        weight: action.payload.weight,
        height: action.payload.height,
        abilities: action.payload.abilities.map((x) => x.ability.name),
        stats: {
          hp: action.payload.stats[0].base_stat,
          atk: action.payload.stats[1].base_stat,
          def: action.payload.stats[2].base_stat,
          spAtk: action.payload.stats[3].base_stat,
          spDef: action.payload.stats[4].base_stat,
          spd: action.payload.stats[5].base_stat
        }
      };
    },
    [getPokemon.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

export const selectPokemon = (state) => state.pokemon.pokemon;

export const selectPokemonStatus = (state) => ({
  isPokemonLoading: state.pokemon.isLoading,
  isPokemonError: state.pokemon.isError
});

export default pokemonSlice.reducer;
