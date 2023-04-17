import { ModalProductItem, ModalProductList } from 'components'
import { Button, Modal, SummaryInfo } from 'UI'
import { useCartReducer, useFavReducer } from 'utils'

import s from './FavouritesModal.module.sass'

const FavouritesModal = () => {
  const { isOpened, favProducts, totalAmount, changeFavModalStatus, updateFavoriteList } =
    useFavReducer()
  const { addProductToCart } = useCartReducer()

  const addFavoritesToCart = () => {
    favProducts.forEach((product) => addProductToCart(product))
    favProducts.forEach((product) => updateFavoriteList(product))
    setTimeout(changeFavModalStatus, 650)
  }

  return (
    <>
      {isOpened && (
        <Modal
          handleClose={changeFavModalStatus}
          heading="Favourites"
          itemCount={favProducts.length}>
          <div className={s.productsListWrapper}>
            <ModalProductList products={favProducts} favoriteView />
            <SummaryInfo totalAmount={totalAmount}>
              <Button onClick={addFavoritesToCart}>Add to cart</Button>
            </SummaryInfo>
          </div>
        </Modal>
      )}
    </>
  )
}

export default FavouritesModal
