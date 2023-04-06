import React, { FC } from 'react'
import s from './ModalEvents.module.scss'

type ModalEventsProps = {
  children: React.ReactNode
}

const ModalEvents: FC<ModalEventsProps> = ({ children }) => {
  return (
    <div className={s.actions}>
      <div>Subtotal:</div>
      <div className={s.actionsInfo}>Shipping and taxes calculated at checkout</div>
      <div className={s.buttonWrapper}>{children}</div>
    </div>
  )
}

export default ModalEvents
