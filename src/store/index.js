import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import navigation from './slices/navigation'
import pokemonSlice from './slices/pokemon'
import { pokeapi } from './api/pokeapi'


export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(pokeapi.middleware),
  reducer: {
    navigation,
    pokemonSlice, 
    [pokeapi.reducerPath]: pokeapi.reducer,
  },
})