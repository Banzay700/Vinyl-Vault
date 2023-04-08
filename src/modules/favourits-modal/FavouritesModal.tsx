import React, { FC } from 'react'

import { ModalProductItem } from 'components'
import { Button, Modal, SummaryInfo } from 'UI'
import { toggleFavouritesStatus } from 'store'
import { calcTotalAmount, useAppSelector, useAppDispatch } from 'utils'

import s from './FavouritesModal.module.sass'

interface FavouritesModalType {
  handleClose: () => void
}

const FavouritesModal: FC<FavouritesModalType> = ({ handleClose }) => {
  const dispatch = useAppDispatch()
  const isOpened = useAppSelector((state) => state.modalsStatus.favouritesStatus)
  const favourites = useAppSelector((state) => state.favourites.favourites)

  const favouritesProducts = favourites.map((item) => <ModalProductItem key={item.id} {...item} />)

  const totalAmount = calcTotalAmount(favourites)

  const addFavoritesToCart = () => {
    dispatch(toggleFavouritesStatus())
  }

  return (
    <>
      {isOpened && (
        <Modal handleClose={handleClose} heading="Favourites" itemCount={favourites.length}>
          <div className={s.productsListWrapper}>
            <div className={s.productsList}>{favouritesProducts}</div>
            <SummaryInfo totalAmount={totalAmount}>
              <Button onClick={addFavoritesToCart}>Add to Cart</Button>
            </SummaryInfo>
          </div>
        </Modal>
      )}
    </>
  )
}

export default FavouritesModal
