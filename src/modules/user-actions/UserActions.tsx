import { useState } from 'react'
import { IconButton, Modal } from 'UI'
import { useSelector } from 'react-redux'
import s from './UserActions.module.scss'

type ModalType = 'cart' | 'favourites'

const UserActions = () => {
  const [modalStatus, setModalStatus] = useState({ cart: false, favourites: false })
  const favouritesProducts = useSelector((state) => state.favourites.favourites)

  const closeModal = (type: ModalType) => {
    setModalStatus((prev) => ({ ...prev, [type]: false }))
  }

  localStorage.setItem('favorites', JSON.stringify(favouritesProducts))

  const openModal = (type: ModalType) => {
    setModalStatus((prev) => ({ ...prev, [type]: true }))
  }

  return (
    <div className={s.userActions}>
      <IconButton
        defaultStyle
        onClick={() => openModal('favourites')}
        labelValue={favouritesProducts.length}
      />

      <IconButton defaultStyle={false} onClick={() => openModal('cart')} labelValue={0} />

      {modalStatus.cart && (
        <Modal type="cart" close={() => closeModal('cart')}>
          CONTENT
        </Modal>
      )}
      {modalStatus.favourites && (
        <Modal type="favourite" close={() => closeModal('favourites')}>
          ANOTHER CONTENT
        </Modal>
      )}
    </div>
  )
}

export default UserActions
