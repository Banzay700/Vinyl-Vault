import { createSlice } from '@reduxjs/toolkit'

const modalsStatusSlice = createSlice({
  name: 'favouritesModal',
  initialState: {
    favouritesStatus: false,
    cartStatus: false,
  },
  reducers: {
    toggleFavouritesStatus(state) {
      state.favouritesStatus = !state.favouritesStatus
    },
    toggleCartStatus(state) {
      state.cartStatus = !state.cartStatus
    },
  },
})

export const { toggleFavouritesStatus, toggleCartStatus } = modalsStatusSlice.actions

export default modalsStatusSlice.reducer
