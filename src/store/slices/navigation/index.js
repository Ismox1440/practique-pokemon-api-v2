import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: false,
  filterNumber: 0,
  page: 0
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {

    setFilter: (state, action) => {
      state.filter = action.payload.filter
      state.filterNumber = action.payload.filterNumber
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilter, setPage } = navigationSlice.actions

export default navigationSlice.reducer