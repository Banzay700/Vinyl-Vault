import { ModalProductList, SummaryInfo } from 'components'
import { Button, Modal } from 'UI'
import { useCartReducer, useFavReducer } from 'utils'

import s from './Favorites.module.scss'

const Favorites = () => {
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
          heading="Favorites"
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

export default Favorites
