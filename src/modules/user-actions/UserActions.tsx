import { FavouritesModal, CartModal } from 'modules'

import { IconButton } from 'UI'
import { useAppSelector, useAppDispatch } from 'utils'
import { toggleFavouritesStatus, toggleCartStatus } from 'store'

import s from './UserActions.module.scss'

const UserActions = () => {
  const dispatch = useAppDispatch()
  const favouritesQuontity = useAppSelector((state) => state.favourites.favourites).length

  const toggleFavModalStatus = () => dispatch(toggleFavouritesStatus())
  const toggleCartModalStatus = () => dispatch(toggleCartStatus())

  return (
    <div className={s.userActions}>
      <IconButton defaultStyle onClick={toggleFavModalStatus} counter={favouritesQuontity} />
      <IconButton defaultStyle={false} onClick={toggleCartModalStatus} counter={0} />

      <FavouritesModal handleClose={toggleFavModalStatus} />
      <CartModal handleClose={toggleCartModalStatus} />
    </div>
  )
}

export default UserActions
