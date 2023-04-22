import { useCartReducer } from 'utils/useCartReducer.hook'

import s from './Total.module.sass'

const Total = () => {
  const { cartProducts } = useCartReducer()

  return <div className={s.totalSide}></div>
}

export default Total
