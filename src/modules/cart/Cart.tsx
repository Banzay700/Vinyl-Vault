import { Link } from 'react-router-dom'

import { ModalProductList } from 'components'
import { Button, Modal, SummaryInfo } from 'UI'
import { useCartReducer } from 'utils'

import s from './Cart.module.sass'

const Cart = () => {
  const { isOpened, totalAmount, cartProducts, changeCartModalStatus } = useCartReducer()

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
              <Link to="checkout">
                <Button>Checkout</Button>
              </Link>
            </SummaryInfo>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Cart
