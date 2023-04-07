import { FC, useEffect, useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

import { productAnimation, useAppSelector, useAppDispatch } from 'utils'
import { addToFavourites } from 'store'
import { ProductType } from 'types'
import { ReactComponent as KeyIcon } from 'assets/key.svg'

import s from './Product.module.sass'

const Product: FC<ProductType> = (product) => {
  const { id, image, artist, title, price } = product

  const dispatch = useAppDispatch()
  const favourites = useAppSelector((state) => state.favourites.favourites)
  const isMatch = favourites.some((item: ProductType) => item.id === id)

  const [iconStyle, setIconStyle] = useState(s.favIcon)

  useEffect(() => {
    const style = isMatch ? s.favIconActive : s.favIcon

    setIconStyle(style)
  }, [isMatch])

  const addFavourites = () => dispatch(addToFavourites(product))

  return (
    <motion.div className={s.product} {...productAnimation}>
      <div className={s.image}>
        <img src={image} alt="product" />
        <motion.div whileTap={{ scale: 1.1 }} className={s.iconWrapper} title="Add to Favourites">
          <KeyIcon className={iconStyle} onClick={addFavourites} />
        </motion.div>
      </div>
      <div className={s.productInfo}>
        <div>
          <div className={s.title}>{artist}</div>
          <div className={s.description}>{title}</div>
        </div>
        <div className={s.price}>
          <div>${price}</div>
          <div className={s.buttonWrapper}>
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Product
