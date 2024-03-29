import { motion } from 'framer-motion'

import { ProductList } from 'modules'
import { Pagination } from 'components'
import { Banner } from 'UI'
import { pageAnimation } from 'utils'
import { ShopSidebar } from './collection-sidedar'
import { content, heading } from './collection.utils'

// '../../../server/db.json' mock-data

import s from './Collection.module.scss'

const Collection = () => {
  return (
    <motion.div className={s.collection} {...pageAnimation}>
      <Banner heading={heading}>{content}</Banner>
      <div className={s.contentWrapper}>
        <ShopSidebar />
        <div className={s.content}>
          <ProductList />
          <Pagination />
        </div>
      </div>
    </motion.div>
  )
}

export default Collection
