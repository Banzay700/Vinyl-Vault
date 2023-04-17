import { calcTotalAmount, sumPropValue, useAppDispatch, useAppSelector } from 'utils'
import { addToCart, removeItem, toggleCartModalStatus, updateCart } from 'store'
import { ProductType } from 'types'

interface UseCartReducerReturnType {
  isOpened: boolean
  totalAmount: number
  cartProducts: ProductType[]
  productsQuantity: number
  doUpdate: (product: ProductType[]) => void
  addProductToCart: (product: ProductType) => void
  removeCartItem: (product: ProductType) => void
  changeCartModalStatus: () => void
}

export const useCartReducer = (): UseCartReducerReturnType => {
  const dispatch = useAppDispatch()
  const isOpened = useAppSelector((state) => state.cart.cartStatus)
  const cartProducts = useAppSelector((state) => state.cart.cart)
  const totalAmount = calcTotalAmount(cartProducts)
  const productsQuantity = sumPropValue(cartProducts, 'sold')

  const addProductToCart = (product: ProductType) => {
    const foundProductIndex = cartProducts.findIndex((p) => p.id === product.id)

    if (foundProductIndex !== -1) {
      const products = [...cartProducts]
      const foundProduct = products[foundProductIndex]

      if (foundProduct.sold < foundProduct.inStock) {
        products[foundProductIndex] = {
          ...foundProduct,
          sold: foundProduct.sold + product.sold,
          total: foundProduct.total + foundProduct.price,
        }

        dispatch(updateCart(products))
      }
    } else {
      dispatch(addToCart(product))
    }
  }

  const doUpdate = (products: ProductType[]) => dispatch(updateCart(products))
  const changeCartModalStatus = () => dispatch(toggleCartModalStatus())
  const removeCartItem = (product: ProductType) => dispatch(removeItem(product))

  return {
    isOpened,
    totalAmount,
    cartProducts,
    productsQuantity,
    doUpdate,
    addProductToCart,
    removeCartItem,
    changeCartModalStatus,
  }
}
