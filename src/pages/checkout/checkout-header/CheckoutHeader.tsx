import { Logo } from 'UI'

import { Breadcrumb } from './breadcrumb'
import { ExpressCheckout } from './express-checkout'

import s from './CheckoutHeader.module.scss'

const CheckoutHeader = () => {
  return (
    <div className={s.checkoutHeader}>
      <Logo />
      <Breadcrumb />
      <ExpressCheckout />
      <div className={s.divider}>
        <span>OR</span>
      </div>
    </div>
  )
}

export default CheckoutHeader
