import React, { FC, useEffect } from 'react'

import { Product } from 'modules'
import { useAppSelector, useAppDispatch } from 'utils'
import { getCollection } from 'store'
import { ProductType } from 'types'

import s from './ProductList.module.scss'

const ProductList: FC = () => {
  const products = useAppSelector((state) => state.collection.collection)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCollection({}))
  }, [dispatch])

  return (
    <div className={s.productList}>
      {products.map((product: ProductType) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductList
