import { FC } from 'react'

import { ProductType } from 'types'

import s from './ModalProductItem.module.sass'

const ModalProductItem: FC<ProductType> = ({ id, image, artist, title, price }) => {
  return (
    <div className={s.productItem}>
      <div className={s.image}>
        <img src={image} alt="product" />
      </div>
      <div className={s.productInfo}>
        <div className={s.productText}>
          <div className={s.productTitle}>{artist}</div>
          <div className={s.productDescription}>{title}</div>
          <div className={s.productActions}></div>
        </div>
        <div className={s.productPrice}>{price}</div>
      </div>
    </div>
  )
}

export default ModalProductItem
