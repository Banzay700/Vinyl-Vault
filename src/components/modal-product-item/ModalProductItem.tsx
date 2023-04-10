import { CloseOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { productAnimation, useAppDispatch } from 'utils'
import { updateFavouritesList } from 'store'
import { ProductType } from 'types'

import s from './ModalProductItem.module.sass'

const ModalProductItem: FC<ProductType> = (product) => {
  const { image, artist, title, price } = product
  const dispatch = useAppDispatch()

  const removeFavourite = () => dispatch(updateFavouritesList(product))

  return (
    <motion.span className={s.productItem} {...productAnimation}>
      <div className={s.image}>
        <img src={image} alt="product" />
      </div>
      <div className={s.productInfo}>
        <div className={s.productText}>
          <div>{artist}</div>
          <div className={s.productDescription}>{title}</div>
        </div>
        <div>{price}$</div>
      </div>
      <motion.button whileTap={{ scale: 1.02 }} className={s.deleteIcon} onClick={removeFavourite}>
        <CloseOutlined />
      </motion.button>
    </motion.span>
  )
}

export default ModalProductItem
