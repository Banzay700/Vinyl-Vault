import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from 'types'

const favourites = JSON.parse(localStorage.getItem('favorites') || '[]') as ProductType[]

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites,
  },
  reducers: {
    addToFavourites(state, action: PayloadAction<ProductType>) {
      const index = state.favourites.findIndex((item: ProductType) => item.id === action.payload.id)

      if (index === -1) {
        state.favourites.push(action.payload)
      } else {
        state.favourites.splice(index, 1)
      }

      localStorage.setItem('favorites', JSON.stringify(state.favourites))
    },
  },
})

export const { addToFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer
