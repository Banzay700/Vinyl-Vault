import { FC } from 'react'
import { Badge } from 'antd'

import { Img } from 'UI'
import { ProductType } from 'types'

import s from './TotalItem.module.sass'

const TotalItem: FC<ProductType> = ({ image, total, sold, artist, release }) => {
  return (
    <div className={s.totalItem}>
      <Img className={s.imageWrapper} src={image} alt="Albom">
        <Badge count={sold} className={s.badge} color="#7a7a7e" />
      </Img>
      <div className={s.productInfo}>
        <div className={s.artist}>
          Artist: <span>{artist}</span>
        </div>
        <div>
          Release date: <span>{release}</span>
        </div>
      </div>
      <div className={s.totalPrice}>${total}</div>
    </div>
  )
}

export default TotalItem
