export { default as store } from './store'

export { updateFavouritesList, toggleFavModalStatus } from './favouritesSlice'
export { toggleCartModalStatus, addToCart } from './cartSlice'

export type { AppDispatch, RootState } from './store'
