import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

import { NotFoundPage } from 'pages'
import { Button, Img, InputNumberUI } from 'UI'
import { pageAnimation, useAppSelector, useCartReducer } from 'utils'

import s from './ProductPage.module.sass'
import { ProductDetails } from 'pages/product-page/product-details'
import { useState } from 'react'

const ProductPage = () => {
  const { id } = useParams()
  const [soldQuantity, setSoldQuantity] = useState(1)
  const products = useAppSelector((state) => state.collection.collection)
  const { addProductToCart } = useCartReducer()
  const product = products.find((p) => p.id === Number(id))

  const test = () => {
    if (product) {
      addProductToCart({ ...product, sold: soldQuantity })
    }
  }

  const changeQuantity = (value: number | null) => {
    const newValue = value ?? 0
    setSoldQuantity(newValue)
  }

  return (
    <>
      {product ? (
        <motion.div {...pageAnimation} className={s.productPage}>
          <Img className={s.image} src={product.image} alt="Product" />
          <ProductDetails product={product}>
            <InputNumberUI defaultValue={1} max={product.inStock} onChange={changeQuantity} />
            <Button onClick={test}>Add to cart</Button>
          </ProductDetails>
        </motion.div>
      ) : (
        <NotFoundPage />
      )}
    </>
  )
}

export default ProductPage
