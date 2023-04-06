import { useEffect, useState } from 'react'
import { ProductList, Product } from 'modules'
import { Pagination } from 'components'
import { Banner } from 'UI'
import { ShopSidebar } from './collection-sidedar'

import s from './Collection.module.scss'

const Collection = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('../../../public/data/mockData.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className={s.collection}>
      <Banner />
      <div className={s.contentWrapper}>
        <ShopSidebar />
        <div className={s.content}>
          <ProductList>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductList>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Collection
