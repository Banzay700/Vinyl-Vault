import s from './Product.module.scss'

const Product = ({ product }) => {
  const { image, artist, title, price } = product

  return (
    <div className={s.product}>
      <div className={s.image}>
        <img src={image} alt="Vinyl" />
      </div>
      <div className={s.productInfo}>
        <div className={s.artist}>{artist}</div>
        <div className={s.title}>{title}</div>
        <div className={s.price}>${price}</div>
      </div>
    </div>
  )
}

export default Product
