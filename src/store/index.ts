export { default as store } from './store'

export { updateFavoritesList, toggleFavModalStatus } from './favouritesSlice'
export { toggleCartModalStatus, addToCart, removeItem, updateCart } from './cartSlice'

export type { AppDispatch, RootState } from './store'
