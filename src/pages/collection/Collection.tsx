import { useEffect, useState } from 'react'
import { ProductList, Product } from 'module'
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
      <ShopSidebar />
      <ProductList>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductList>
    </div>
  )
}

export default Collection
