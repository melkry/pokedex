import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSpecies = createAsyncThunk(
  "species/getSpecies",
  async (query, thunkAPI) => {
    const url = "https://pokeapi.co/api/v2/";
    const response = await fetch(`${url}${query}`).then((data) => data.json());
    return response;
  }
);

export const speciesSlice = createSlice({
  name: "species",
  initialState: {
    isLoading: false,
    isError: false,
    species: {
      captureRate: 0,
      descriptions: [{ flavor_text: "N/A" }],
      evoChainId: 0
    }
  },
  extraReducers: {
    [getSpecies.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getSpecies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.species = {
        captureRate: action.payload.capture_rate,
        descriptions: action.payload.flavor_text_entries.filter(
          (y) => y.language.name === "en" && y.flavor_text
        ),
        evoChainId: action.payload.evolution_chain.url.split("/").slice(-1)
      };
    },
    [getSpecies.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

export const selectSpecies = (state) => state.species.species;

export const selectSpeciesStatus = (state) => ({
  isSpeciesLoading: state.species.isLoading,
  isSpeciesError: state.species.isError
});

export default speciesSlice.reducer;
