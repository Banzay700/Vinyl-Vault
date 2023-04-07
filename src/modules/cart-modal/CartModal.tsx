import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Modal } from 'components'
import { Button } from 'UI'

import s from './CartModal.module.sass'

interface FavouritesModalType {
  handleClose: () => void
}

const CartModal: FC<FavouritesModalType> = ({ handleClose }) => {
  const isOpened = useSelector((state) => state.modalsStatus.cartStatus)

  return (
    <>
      {isOpened && (
        <Modal handleClose={handleClose} heading="You Cart" itemCount={10}>
          <div className={s.actions}>
            <div>Subtotal:</div>
            <div className={s.actionsInfo}>Shipping and taxes calculated at checkout</div>
            <div className={s.buttonWrapper}>
              <Button>Checkout</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default CartModal
