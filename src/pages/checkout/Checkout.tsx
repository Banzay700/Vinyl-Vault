import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import { pageAnimation } from 'utils'
import { Total } from './total'
import { CheckoutHeader } from './checkout-header'

import s from './Checkout.module.scss'

const Checkout = () => {
  return (
    <motion.div {...pageAnimation} className={s.container}>
      <div className={s.checkoutSide}>
        <CheckoutHeader />
        <div className={s.outletContainer}>
          <Outlet />
        </div>
      </div>
      <Total />
    </motion.div>
  )
}

export default Checkout
