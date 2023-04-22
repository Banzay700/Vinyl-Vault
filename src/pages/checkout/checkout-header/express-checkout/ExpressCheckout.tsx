import { GooglePay, ShopPay } from 'assets'
import { Button } from 'UI'

import s from './ExpressCheckout.module.sass'

const ExpressCheckout = () => {
  return (
    <div className={s.container}>
      <div className={s.label}>Express Checkout</div>
      <div className={s.buttonsBorder}>
        <div className={s.buttonsWrapper}>
          <Button secondary icon={<ShopPay />} />
          <Button icon={<GooglePay />} />
        </div>
      </div>
    </div>
  )
}

export default ExpressCheckout
