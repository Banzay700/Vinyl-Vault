import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Modal } from 'components'
import { Button } from 'UI/button'

import s from './FavouritesModal.module.sass'

interface FavouritesModalType {
  handleClose: () => void
}

const FavouritesModal: FC<FavouritesModalType> = ({ handleClose }) => {
  const isOpened = useSelector((state) => state.modalsStatus.favouritesStatus)

  return (
    <>
      {isOpened && (
        <Modal handleClose={handleClose} heading="Favourites" itemCount={10}>
          <div className={s.actions}>
            <div>Subtotal:</div>
            <div className={s.actionsInfo}>Shipping and taxes calculated at checkout</div>
            <div className={s.buttonWrapper}>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default FavouritesModal
