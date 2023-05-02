import { FC } from 'react'

import { ModalProductItem } from 'components'
import { ProductType, ModalProductListProps } from 'types'
import { useFavReducer, useCartReducer } from 'utils'

import s from './ModalProductList.module.sass'

const ModalProductList: FC<ModalProductListProps> = ({ products, cartView, favoriteView }) => {
  const { updateFavoriteList } = useFavReducer()
  const { removeCartItem } = useCartReducer()

  const handleClose = (product: ProductType) => {
    return (cartView && removeCartItem(product)) || (favoriteView && updateFavoriteList(product))
  }

  return (
    <div className={s.productsList}>
      {products.map((product: ProductType) => (
        <ModalProductItem
          key={product.id}
          handleClose={() => handleClose(product)}
          product={product}
        />
      ))}
    </div>
  )
}

export default ModalProductList
