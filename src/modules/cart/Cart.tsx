import { Link } from 'react-router-dom'

import { ModalProductList, SummaryInfo } from 'components'
import { Button, Modal } from 'UI'
import { useCartReducer } from 'utils'

const Cart = () => {
  const { isOpened, totalAmount, cartProducts, changeCartModalStatus } = useCartReducer()
  return (
    <>
      {isOpened && (
        <Modal
          handleClose={changeCartModalStatus}
          heading="Your Cart"
          itemCount={cartProducts.length}>
          <div>
            <ModalProductList products={cartProducts} cartView />
            <SummaryInfo totalAmount={totalAmount}>
              <Link to="information">
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
