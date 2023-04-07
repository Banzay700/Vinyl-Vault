import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesSlice'
import modalsStatusReducer from './modalsStatusSlice'

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    modalsStatus: modalsStatusReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
