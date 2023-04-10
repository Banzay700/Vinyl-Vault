import { ModalProductItem } from 'components'
import { Button, Modal, SummaryInfo } from 'UI'
import { useCartReducer, useFavReducer } from 'utils'

import s from './FavouritesModal.module.sass'

const FavouritesModal = () => {
  const { isOpened, favProducts, totalAmount, changeFavModalStatus, updateFavouriteList } =
    useFavReducer()
  const { addProductToCart } = useCartReducer()

  const addFavoritesToCart = () => {
    addProductToCart(favProducts)
    favProducts.forEach((product) => updateFavouriteList(product))
    setTimeout(changeFavModalStatus, 650)
  }

  const favouritesProducts = favProducts.map((product) => (
    <ModalProductItem key={product.id} {...product} />
  ))

  return (
    <>
      {isOpened && (
        <Modal
          handleClose={changeFavModalStatus}
          heading="Favourites"
          itemCount={favProducts.length}>
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
