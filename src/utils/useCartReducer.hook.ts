import { calcTotalAmount, useAppDispatch, useAppSelector } from 'utils'
import { addToCart, toggleCartModalStatus } from 'store'
import { ProductType } from 'types'

type CartProductType = ProductType | ProductType[]

interface UseCartReducerReturnType {
  isOpened: boolean
  totalAmount: number
  cartProducts: ProductType[]
  cartProductsQuantity: number
  addProductToCart: (product: CartProductType) => void
  changeCartModalStatus: () => void
}

export const useCartReducer = (): UseCartReducerReturnType => {
  const dispatch = useAppDispatch()
  const isOpened = useAppSelector((state) => state.cart.cartStatus)
  const cartProducts = useAppSelector((state) => state.cart.cart)
  const cartProductsQuantity = useAppSelector((state) => state.cart.cart).length
  const totalAmount = calcTotalAmount(cartProducts)

  const addProductToCart = (product: CartProductType) => dispatch(addToCart(product))
  const changeCartModalStatus = () => dispatch(toggleCartModalStatus())

  return {
    isOpened,
    totalAmount,
    cartProducts,
    cartProductsQuantity,
    addProductToCart,
    changeCartModalStatus,
  }
}
