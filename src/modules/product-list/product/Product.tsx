import { FC, useEffect, useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

import { IconUI, Img } from 'UI'
import { productAnimation, useCartReducer, useFavReducer } from 'utils'
import { ProductType } from 'types'
import { KeyIcon } from 'assets'

import s from './Product.module.sass'

const Product: FC<ProductType> = (product) => {
  const { id, image, artist, title, price } = product

  const [iconStyle, setIconStyle] = useState(s.favIcon)
  const { addProductToCart } = useCartReducer()
  const { favProducts, updateFavoriteList } = useFavReducer()

  const isMatch = favProducts.some((item: ProductType) => item.id === id)

  useEffect(() => {
    const style = isMatch ? s.favIconActive : s.favIcon
    setIconStyle(style)
  }, [isMatch])

  return (
    <motion.div className={s.product} {...productAnimation}>
      <Img className={s.image} src={image} alt="product">
        <div className={s.iconWrapper}>
          <IconUI onClick={() => updateFavoriteList(product)} title="Add to Favourites">
            <KeyIcon className={iconStyle} />
          </IconUI>
        </div>
      </Img>
      <div className={s.productInfo}>
        <div>
          <div className={s.title}>{artist}</div>
          <div className={s.description}>{title}</div>
        </div>
        <div className={s.price}>
          ${price}
          <IconUI onClick={() => addProductToCart(product)} title="Buy">
            <ShoppingCartOutlined />
          </IconUI>
        </div>
      </div>
    </motion.div>
  )
}

export default Product
