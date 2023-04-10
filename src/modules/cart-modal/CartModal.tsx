import { ModalProductItem } from 'components'
import { Button, Modal, SummaryInfo } from 'UI'
import { useCartReducer } from 'utils'

import s from './CartModal.module.sass'

const CartModal = () => {
  const { isOpened, totalAmount, cartProducts, cartProductsQuantity, changeCartModalStatus } =
    useCartReducer()

  const checkout = () => {}
  const cartProductList = cartProducts.map((product) => (
    <ModalProductItem key={product.id} {...product} />
  ))

  return (
    <>
      {isOpened && (
        <Modal
          handleClose={changeCartModalStatus}
          heading="Favourites"
          itemCount={cartProductsQuantity}>
          <div className={s.productsListWrapper}>
            <div className={s.productsList}>{cartProductList}</div>
            <SummaryInfo totalAmount={totalAmount}>
              <Button onClick={checkout}>Checkout</Button>
            </SummaryInfo>
          </div>
        </Modal>
      )}
    </>
  )
}

export default CartModal
