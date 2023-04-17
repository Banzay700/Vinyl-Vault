import { FC, ReactNode } from 'react'

import { ProductType } from 'types'

import s from './ProductDetails.module.sass'

interface ProductDetailsProps {
  product: ProductType
  children: ReactNode
}

const ProductDetails: FC<ProductDetailsProps> = ({ product, children }) => {
  const { artist, title, price, release, description, label, formats } = product

  return (
    <div className={s.infoWrapper}>
      <div className={s.info}>
        <div>
          Artist: <span>{artist}</span>
        </div>
        <div>{title}</div>
        <div>${price}</div>
        <div className={s.release}>
          Release date: <span>{release}</span>
        </div>
        <div className={s.actions}>{children}</div>
        <div className={s.description}>{description}</div>
        <div>
          Label: <span>{label}</span>
        </div>
        <div>
          Formats: <span>{formats}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
