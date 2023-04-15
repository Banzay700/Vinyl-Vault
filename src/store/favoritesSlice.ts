import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from 'types'

const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]') as ProductType[]

const favoritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favoritesList,
    favoriteModalStatus: false,
  },
  reducers: {
    updateFavoritesList(state, action: PayloadAction<ProductType>) {
      const index = state.favoritesList.findIndex(
        (item: ProductType) => item.id === action.payload.id,
      )

      if (index === -1) {
        state.favoritesList.push(action.payload)
      } else {
        state.favoritesList.splice(index, 1)
      }

      localStorage.setItem('favorites', JSON.stringify(state.favoritesList))
    },
    toggleFavModalStatus(state) {
      state.favoriteModalStatus = !state.favoriteModalStatus
    },
  },
})

export const { updateFavoritesList, toggleFavModalStatus } = favoritesSlice.actions
export default favoritesSlice.reducer
