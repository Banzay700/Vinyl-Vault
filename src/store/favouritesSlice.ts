import { createSlice } from '@reduxjs/toolkit'
import { ProductType } from 'types'

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  reducers: {
    addToFavourites(state, action) {
      const index = state.favourites.findIndex((item: ProductType) => item.id === action.payload.id)

      if (index === -1) {
        state.favourites.push(action.payload)
      } else {
        state.favourites.splice(index, 1)
      }
    },
  },
})

export const { addToFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer
