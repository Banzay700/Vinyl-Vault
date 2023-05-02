import { Link } from 'react-router-dom'

import { ModalProductList, SummaryInfo } from 'components'
import { Button, Modal } from 'UI'
import { useCartReducer } from 'utils'

import s from './Cart.module.sass'

const Cart = () => {
  const { isOpened, totalAmount, cartProducts, changeCartModalStatus } = useCartReducer()

  return (
    <div>
      {isOpened && (
        <Modal
          handleClose={changeCartModalStatus}
          heading="Your Cart"
          itemCount={cartProducts.length}>
          <div className={s.productsListWrapper}>
            <ModalProductList products={cartProducts} cartView />
            <SummaryInfo totalAmount={totalAmount}>
              <Link to="information">
                <Button>Checkout</Button>
              </Link>
            </SummaryInfo>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Cart
