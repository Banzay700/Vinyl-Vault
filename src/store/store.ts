import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesSlice'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favouritesReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
