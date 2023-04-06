import { HeartFilled } from '@ant-design/icons'
import s from './Product.module.scss'

const Product = ({ product }) => {
  const { image, artist, title, price } = product

  return (
    <div className={s.product}>
      <div className={s.image}>
        <img src={image} alt="product" />
        <HeartFilled className={s.favIcon} />
      </div>
      <div className={s.productInfo}>
        <div>
          <div className={s.title}>{artist}</div>
          <div className={s.description}>{title}</div>
        </div>
        <div className={s.price}>${price}</div>
      </div>
    </div>
  )
}

export default Product
