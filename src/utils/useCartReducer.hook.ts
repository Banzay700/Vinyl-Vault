import { calcTotalAmount, useAppDispatch, useAppSelector } from 'utils'
import { addToCart, removeItem, toggleCartModalStatus } from 'store'
import { ProductType } from 'types'

type CartProductType = ProductType | ProductType[]

interface UseCartReducerReturnType {
  isOpened: boolean
  totalAmount: number
  cartProducts: ProductType[]
  addProductToCart: (product: CartProductType) => void
  removeCartItem: (product: ProductType) => void
  changeCartModalStatus: () => void
}

export const useCartReducer = (): UseCartReducerReturnType => {
  const dispatch = useAppDispatch()
  const isOpened = useAppSelector((state) => state.cart.cartStatus)
  const cartProducts = useAppSelector((state) => state.cart.cart)
  const totalAmount = calcTotalAmount(cartProducts)

  const addProductToCart = (product: CartProductType) => dispatch(addToCart(product))
  const changeCartModalStatus = () => dispatch(toggleCartModalStatus())
  const removeCartItem = (product: ProductType) => dispatch(removeItem(product))

  return {
    isOpened,
    totalAmount,
    cartProducts,
    addProductToCart,
    removeCartItem,
    changeCartModalStatus,
  }
}
