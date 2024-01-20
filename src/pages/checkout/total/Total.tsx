import { useCartReducer } from 'utils/useCartReducer.hook'

import { TotalItem } from './total-item'
import { TotalInfo } from './total-info'

import s from './Total.module.scss'

const Total = () => {
  const { cartProducts, totalAmount } = useCartReducer()
  const totalList = cartProducts.map((item) => <TotalItem key={item.id} {...item} />)

  return (
    <div className={s.totalSide}>
      <div className={s.container}>
        <div className={s.totalList}>{totalList}</div>
        <TotalInfo total={totalAmount} />
      </div>
    </div>
  )
}

export default Total
