import React, { FC } from 'react'

import s from './SummaryInfo.module.sass'

interface SummaryInfoProps {
  children: React.ReactNode
  totalAmount: number
}

const SummaryInfo: FC<SummaryInfoProps> = ({ totalAmount, children }) => {
  return (
    <div className={s.actions}>
      <div className={s.total}>
        Subtotal: <span>{totalAmount}$</span>
      </div>
      <div className={s.actionsInfo}>Shipping and taxes calculated at checkout</div>
      <div className={s.buttonWrapper}>{children}</div>
    </div>
  )
}

export default SummaryInfo
