import { calcTotalAmount, sumPropValue, useAppDispatch, useAppSelector } from 'utils'
import { addToCart, removeItem, toggleCartModalStatus, updateCart } from 'store'
import { ProductType } from 'types'

type CartProductType = ProductType

interface UseCartReducerReturnType {
  isOpened: boolean
  totalAmount: number
  cartProducts: ProductType[]
  productsQuantity: number
  addProductToCart: (product: CartProductType) => void
  removeCartItem: (product: ProductType) => void
  changeCartModalStatus: () => void
}

export const useCartReducer = (): UseCartReducerReturnType => {
  const dispatch = useAppDispatch()
  const isOpened = useAppSelector((state) => state.cart.cartStatus)
  const cartProducts = useAppSelector((state) => state.cart.cart)
  const totalAmount = calcTotalAmount(cartProducts)
  const productsQuantity = sumPropValue(cartProducts, 'sold')

  const addProductToCart = (product: CartProductType) => {
    const foundProductIndex = cartProducts.findIndex((p) => p.id === product.id)

    if (foundProductIndex !== -1) {
      const products = [...cartProducts]
      const foundProduct = products[foundProductIndex]

      if (foundProduct.sold < foundProduct.inStock) {
        products[foundProductIndex] = {
          ...foundProduct,
          sold: foundProduct.sold + 1,
          total: foundProduct.total + foundProduct.price,
        }

        dispatch(updateCart(products))
      }
    } else {
      dispatch(addToCart(product))
    }
  }

  const changeCartModalStatus = () => dispatch(toggleCartModalStatus())
  const removeCartItem = (product: ProductType) => dispatch(removeItem(product))

  return {
    isOpened,
    totalAmount,
    cartProducts,
    productsQuantity,
    addProductToCart,
    removeCartItem,
    changeCartModalStatus,
  }
}
