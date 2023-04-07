import { useSelector, useDispatch } from 'react-redux'

import { toggleFavouritesStatus, toggleCartStatus } from 'store/modalsStatusSlice'
import { IconButton } from 'UI'
import { FavouritesModal, CartModal } from 'modules'

import s from './UserActions.module.scss'

const UserActions = () => {
  const dispatch = useDispatch()
  const favouritesQuantity = useSelector((state) => state.favourites.favourites).length

  const toggleFavModalStatus = () => dispatch(toggleFavouritesStatus())
  const toggleCartModalStatus = () => dispatch(toggleCartStatus())

  return (
    <div className={s.userActions}>
      <IconButton defaultStyle onClick={toggleFavModalStatus} counter={favouritesQuantity} />
      <IconButton defaultStyle={false} onClick={toggleCartModalStatus} counter={0} />

      <FavouritesModal handleClose={toggleFavModalStatus} />
      <CartModal handleClose={toggleCartModalStatus} />
    </div>
  )
}

export default UserActions
