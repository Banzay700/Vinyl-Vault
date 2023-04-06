import { useState } from 'react'
import { IconButton, IconUI, Modal } from 'UI'
import s from './UserActions.module.scss'

type ModalType = 'cart' | 'favourites'

const UserActions = () => {
  const [modalStatus, setModalStatus] = useState({ cart: false, favourites: false })
  const { cart, favourites } = modalStatus

  const closeModal = (type: ModalType) => {
    setModalStatus((prev) => ({ ...prev, [type]: false }))
  }

  const openModal = (type: ModalType) => {
    setModalStatus((prev) => ({ ...prev, [type]: true }))
  }

  return (
    <div className={s.userActions}>
      <IconButton onClick={() => openModal('favourites')} labelValue={0}>
        <IconUI type="heart" />
      </IconButton>
      <IconButton onClick={() => openModal('cart')} labelValue={0}>
        <IconUI type="cart" />
      </IconButton>
      {cart && (
        <Modal type="cart" close={() => closeModal('cart')}>
          CONTENT
        </Modal>
      )}
      {favourites && (
        <Modal type="favourite" close={() => closeModal('favourites')}>
          ANOTHER CONTENT
        </Modal>
      )}
    </div>
  )
}

export default UserActions
