import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

import { NotFoundPage } from 'pages'
import { Button, Img, InputSelect } from 'UI'
import { pageAnimation, useAppSelector, useCartReducer } from 'utils'
import { ProductDetails } from './product-details'

import s from './ProductPage.module.sass'

const ProductPage = () => {
  const { id } = useParams()
  const { addProductToCart } = useCartReducer()
  const [soldQuantity, setSoldQuantity] = useState(1)
  const products = useAppSelector((state) => state.collection.collection)
  const product = products.find((p) => p.id === Number(id))

  const addProduct = () => {
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
            <InputSelect size="large" value={1} max={product.inStock} onChange={changeQuantity} />
            <Button onClick={addProduct}>Add to cart</Button>
          </ProductDetails>
        </motion.div>
      ) : (
        <NotFoundPage />
      )}
    </>
  )
}

export default ProductPage
