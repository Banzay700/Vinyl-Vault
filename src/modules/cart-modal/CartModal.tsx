import { ModalProductItem, ModalProductList } from 'components'
import { Button, Modal, SummaryInfo } from 'UI'
import { useCartReducer } from 'utils'

import s from './CartModal.module.sass'

const CartModal = () => {
  const { isOpened, totalAmount, cartProducts, changeCartModalStatus } = useCartReducer()

  const checkout = () => {}

  return (
    <>
      {isOpened && (
        <Modal
          handleClose={changeCartModalStatus}
          heading="Your Cart"
          itemCount={cartProducts.length}>
          <div className={s.productsListWrapper}>
            <ModalProductList products={cartProducts} cartView />
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
