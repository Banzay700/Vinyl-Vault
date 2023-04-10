import { FC, useEffect, useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

import { productAnimation, useCartReducer, useFavReducer } from 'utils'
import { ProductType } from 'types'
import { ReactComponent as KeyIcon } from 'assets/key.svg'

import s from './Product.module.sass'

const Product: FC<ProductType> = (product) => {
  const { id, image, artist, title, price } = product

  const [iconStyle, setIconStyle] = useState(s.favIcon)

  const { favProducts, updateFavouriteList } = useFavReducer()
  const { addProductToCart } = useCartReducer()

  const isMatch = favProducts.some((item: ProductType) => item.id === id)

  useEffect(() => {
    const style = isMatch ? s.favIconActive : s.favIcon

    setIconStyle(style)
  }, [isMatch])

  const updateFavourites = () => updateFavouriteList(product)
  const addProduct = () => addProductToCart(product)

  return (
    <motion.div className={s.product} {...productAnimation}>
      <div className={s.image}>
        <img src={image} alt="product" />
        <motion.div whileTap={{ scale: 1.1 }} className={s.iconWrapper} title="Add to Favourites">
          <KeyIcon className={iconStyle} onClick={updateFavourites} />
        </motion.div>
      </div>
      <div className={s.productInfo}>
        <div>
          <div className={s.title}>{artist}</div>
          <div className={s.description}>{title}</div>
        </div>
        <div className={s.price}>
          <div>${price}</div>
          <button onClick={addProduct} className={s.buttonWrapper} type="submit">
            <ShoppingCartOutlined />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Product
