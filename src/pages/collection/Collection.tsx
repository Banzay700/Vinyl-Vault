import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { ProductList, Product } from 'modules'
import { Pagination } from 'components'
import { Banner } from 'UI'
import { ProductType } from 'types'
import { pageAnimation } from 'utils'
import { ShopSidebar } from './collection-sidedar'
import { content, heading } from './collection.utils'

// '../../../server/db.json' mock-data

import s from './Collection.module.scss'

const Collection = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/collection')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const allProducts = products.map((item: ProductType) => <Product key={item.id} {...item} />)

  return (
    <motion.div className={s.collection} {...pageAnimation}>
      <Banner heading={heading}>{content}</Banner>
      <div className={s.contentWrapper}>
        <ShopSidebar />
        <div className={s.content}>
          <ProductList>{allProducts}</ProductList>
          <Pagination />
        </div>
      </div>
    </motion.div>
  )
}

export default Collection
