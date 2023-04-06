import React, { FC } from 'react'

import s from './ProductList.module.scss'

interface ProductListProps {
  children: React.ReactNode
}

const ProductList: FC<ProductListProps> = ({ children }) => {
  return <div className={s.productList}>{children}</div>
}

export default ProductList
