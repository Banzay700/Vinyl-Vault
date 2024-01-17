import { BadgeButton } from 'UI'
import { useCartReducer, useFavReducer } from 'utils'

import s from './UserModalTriggers.module.scss'

const UserModalTriggers = () => {
  const { favProducts, changeFavModalStatus } = useFavReducer()
  const { productsQuantity, changeCartModalStatus } = useCartReducer()

  return (
    <div className={s.userActions}>
      <BadgeButton onClick={changeFavModalStatus} counter={favProducts.length} primary />
      <BadgeButton onClick={changeCartModalStatus} counter={productsQuantity} secondary />
    </div>
  )
}

export default UserModalTriggers
