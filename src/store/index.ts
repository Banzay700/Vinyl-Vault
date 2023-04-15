export { default as store } from './store'

export { updateFavoritesList, toggleFavModalStatus } from './favoritesSlice'
export { toggleCartModalStatus, addToCart, removeItem, updateCart } from './cartSlice'
export { getCollection } from './collectionSlice'

export type { AppDispatch, RootState } from './store'
