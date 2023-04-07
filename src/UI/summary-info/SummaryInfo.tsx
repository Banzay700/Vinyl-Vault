import React, { FC } from 'react'

import s from './SummaryInfo.module.sass'

interface SummaryInfoProps {
  children: React.ReactNode
  totalValue: number
}

const SummaryInfo: FC<SummaryInfoProps> = ({ totalValue, children }) => {
  return (
    <div className={s.actions}>
      <div>
        Subtotal: <span>{totalValue}$</span>
      </div>
      <div className={s.actionsInfo}>Shipping and taxes calculated at checkout</div>
      <div className={s.buttonWrapper}>{children}</div>
    </div>
  )
}

export default SummaryInfo
