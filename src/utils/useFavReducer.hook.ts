import { useAppDispatch, useAppSelector, calcTotalAmount } from 'utils'
import { toggleFavModalStatus, updateFavouritesList } from 'store'
import { ProductType } from 'types'

interface UseFavReducerReturnType {
  isOpened: boolean
  favProducts: ProductType[]
  totalAmount: number
  favProductsQuantity: number
  changeFavModalStatus: () => void
  updateFavouriteList: (favProduct: ProductType) => void
}

export const useFavReducer = (): UseFavReducerReturnType => {
  const dispatch = useAppDispatch()
  const isOpened = useAppSelector((state) => state.favourites.favouriteModalStatus)
  const favProducts = useAppSelector((state) => state.favourites.favouritesList)
  const favProductsQuantity = useAppSelector((state) => state.favourites.favouritesList).length
  const totalAmount = calcTotalAmount(favProducts)

  const changeFavModalStatus = () => dispatch(toggleFavModalStatus())
  const updateFavouriteList = (favProduct: ProductType) =>
    dispatch(updateFavouritesList(favProduct))

  return {
    isOpened,
    favProducts,
    totalAmount,
    favProductsQuantity,
    changeFavModalStatus,
    updateFavouriteList,
  }
}
