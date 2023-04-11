export { default as store } from './store'

export { updateFavoritesList, toggleFavModalStatus } from './favouritesSlice'
export { toggleCartModalStatus, addToCart, removeItem } from './cartSlice'

export type { AppDispatch, RootState } from './store'
