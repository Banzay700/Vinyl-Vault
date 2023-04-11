import React, { FC } from 'react'

import s from './ProductList.module.sass'
import { ProductType } from 'types/ProductType'
import { Product } from 'modules/product-list/product'

interface ProductListProps {
  products: ProductType[]
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={s.productList}>
      {products.map((item: ProductType) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ProductList
