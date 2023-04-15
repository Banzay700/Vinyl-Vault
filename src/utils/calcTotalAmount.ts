import { ProductType } from 'types/ProductType'

export const calcTotalAmount = (products: ProductType[]) => {
  return parseFloat(
    products.reduce((totalPrice, product) => totalPrice + product.total, 0).toFixed(2),
  )
}
