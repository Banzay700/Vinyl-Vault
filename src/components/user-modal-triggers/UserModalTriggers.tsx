import { BadgeButton } from 'UI'
import { useCartReducer, useFavReducer } from 'utils'

import s from './UserModalTriggers.module.sass'

const UserModalTriggers = () => {
  const { favProducts, changeFavModalStatus } = useFavReducer()
  const { cartProducts, changeCartModalStatus } = useCartReducer()

  return (
    <div className={s.userActions}>
      <BadgeButton onClick={changeFavModalStatus} counter={favProducts.length} primary />
      <BadgeButton onClick={changeCartModalStatus} counter={cartProducts.length} secondary />
    </div>
  )
}

export default UserModalTriggers
