import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from 'types'

const favouritesList = JSON.parse(localStorage.getItem('favorites') || '[]') as ProductType[]

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouritesList,
    favouriteModalStatus: false,
  },
  reducers: {
    updateFavouritesList(state, action: PayloadAction<ProductType>) {
      const index = state.favouritesList.findIndex(
        (item: ProductType) => item.id === action.payload.id,
      )

      if (index === -1) {
        state.favouritesList.push(action.payload)
      } else {
        state.favouritesList.splice(index, 1)
      }

      localStorage.setItem('favorites', JSON.stringify(state.favouritesList))
    },
    toggleFavModalStatus(state) {
      state.favouriteModalStatus = !state.favouriteModalStatus
    },
  },
})

export const { updateFavouritesList, toggleFavModalStatus } = favouritesSlice.actions
export default favouritesSlice.reducer
