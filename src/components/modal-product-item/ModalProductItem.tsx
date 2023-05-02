import { CloseOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { productAnimation, useAppDispatch, useCartReducer } from 'utils'
import { IconUI, Img, InputSelect } from 'UI'
import { updateCart } from 'store'
import { ProductType } from 'types'

import s from './ModalProductItem.module.sass'

interface ModalProductItemProps {
  product: ProductType
  handleClose: () => void
}

const ModalProductItem: FC<ModalProductItemProps> = ({ product, handleClose }) => {
  const { id, image, artist, title, price, sold, inStock, total } = product
  console.log('render ')
  const dispatch = useAppDispatch()
  const { cartProducts, isOpened } = useCartReducer()

  const calcTotal = (value: number | null) => {
    console.log('Calc total')
    const updatedProducts = cartProducts.slice()
    const i = updatedProducts.findIndex((item) => item.id === id)
    const soldValue = value ?? 0
    updatedProducts[i] = { ...updatedProducts[i], sold: soldValue, total: price * soldValue }

    dispatch(updateCart(updatedProducts))
  }
  // TODO: fix shit on 43 row
  return (
    <motion.span className={s.productItem} {...productAnimation}>
      <Img className={s.image} src={image} alt="product" />
      <div className={s.productInfo}>
        <div className={s.productText}>
          <div>{artist}</div>
          <div className={s.productDescription}>{title}</div>
        </div>
        {total}$
      </div>
      <IconUI onClick={handleClose} title="Delete" style={s.delete}>
        <CloseOutlined />
      </IconUI>
      <div className={s.inputWrapper}>
        {isOpened && <InputSelect value={sold} max={inStock} onChange={calcTotal} />}
      </div>
    </motion.span>
  )
}

export default ModalProductItem
