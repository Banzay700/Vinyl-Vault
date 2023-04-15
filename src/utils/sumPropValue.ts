import { ProductType } from 'types/ProductType'

type PropType = 'sold' | 'price' | 'inStock' | 'total'

export const sumPropValue = (array: ProductType[], prop: PropType): number => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i][prop]
  }
  return sum
}
