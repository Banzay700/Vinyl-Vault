import React, { FC } from 'react'

import { Button, Modal } from 'UI'
import { useAppSelector } from 'utils'

import s from './CartModal.module.sass'

interface FavouritesModalType {
  handleClose: () => void
}

const CartModal: FC<FavouritesModalType> = ({ handleClose }) => {
  const isOpened = useAppSelector((state) => state.modalsStatus.cartStatus)

  return (
    <>
      {isOpened && (
        <Modal handleClose={handleClose} heading="Your Cart" itemCount={10}>
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
