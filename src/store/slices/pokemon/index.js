import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  AllPokemon: []
}

export const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState,
  reducers: {

    getAllPokemon: (state, action) => {
      state.AllPokemon = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getAllPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer