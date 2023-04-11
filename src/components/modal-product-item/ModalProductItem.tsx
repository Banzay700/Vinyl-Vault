import { CloseOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { productAnimation } from 'utils'
import { ProductType } from 'types'

import s from './ModalProductItem.module.sass'

interface ModalProductItemProps {
  product: ProductType
  handleClose: () => void
}

const ModalProductItem: FC<ModalProductItemProps> = ({ product, handleClose }) => {
  const { image, artist, title, price } = product

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
        {price}$
      </div>
      <motion.button whileTap={{ scale: 1.02 }} className={s.deleteIcon} onClick={handleClose}>
        <CloseOutlined />
      </motion.button>
    </motion.span>
  )
}

export default ModalProductItem
