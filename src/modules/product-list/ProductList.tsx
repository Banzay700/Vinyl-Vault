import React, { FC } from 'react'

import { ProductType } from 'types'
import { Product } from 'modules'

import s from './ProductList.module.sass'

interface ProductListProps {
  products: ProductType[]
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={s.productList}>
      {products.map((product: ProductType) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductList
