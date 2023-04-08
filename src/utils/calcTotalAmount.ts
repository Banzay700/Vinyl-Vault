import { ProductType } from 'types/ProductType'

export const calcTotalAmount = (products: ProductType[]) =>
  parseFloat(products.reduce((totalPrice, product) => totalPrice + product.price, 0).toFixed(2))
