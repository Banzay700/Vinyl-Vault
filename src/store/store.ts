import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesSlice'
import cartReducer from './cartSlice'
import collectionReducer from './collectionSlice'

const store = configureStore({
  reducer: {
    collection: collectionReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
