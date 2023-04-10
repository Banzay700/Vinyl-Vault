import { FavouritesModal, CartModal } from 'modules'

import { IconButton } from 'UI'
import { useAppDispatch, useCartReducer, useFavReducer } from 'utils'

import s from './UserModalTriggers.module.scss'

const UserModalTriggers = () => {
  const { favProductsQuantity, changeFavModalStatus } = useFavReducer()
  const { changeCartModalStatus, cartProductsQuantity } = useCartReducer()

  return (
    <div className={s.userActions}>
      <IconButton defaultStyle onClick={changeFavModalStatus} counter={favProductsQuantity} />
      <IconButton
        defaultStyle={false}
        onClick={changeCartModalStatus}
        counter={cartProductsQuantity}
      />
      <CartModal />
      <FavouritesModal />
    </div>
  )
}

export default UserModalTriggers
