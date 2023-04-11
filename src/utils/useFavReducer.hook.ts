import { useAppDispatch, useAppSelector, calcTotalAmount } from 'utils'
import { toggleFavModalStatus, updateFavoritesList } from 'store'
import { ProductType } from 'types'

interface UseFavReducerReturnType {
  isOpened: boolean
  favProducts: ProductType[]
  totalAmount: number
  changeFavModalStatus: () => void
  updateFavoriteList: (favProduct: ProductType) => void
}

export const useFavReducer = (): UseFavReducerReturnType => {
  const dispatch = useAppDispatch()
  const isOpened = useAppSelector((state) => state.favorites.favoriteModalStatus)
  const favProducts = useAppSelector((state) => state.favorites.favoritesList)
  const totalAmount = calcTotalAmount(favProducts)

  const changeFavModalStatus = () => dispatch(toggleFavModalStatus())
  const updateFavoriteList = (favProduct: ProductType) => dispatch(updateFavoritesList(favProduct))

  return {
    isOpened,
    favProducts,
    totalAmount,
    changeFavModalStatus,
    updateFavoriteList,
  }
}
