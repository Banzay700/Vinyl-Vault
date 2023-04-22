import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import { fadeInAnimation } from 'utils'

import s from './SummaryInfo.module.sass'

interface SummaryInfoProps {
  children: ReactNode
  totalAmount: number
}

const SummaryInfo: FC<SummaryInfoProps> = ({ totalAmount, children }) => {
  return (
    <motion.div className={s.actions} {...fadeInAnimation}>
      <div className={s.total}>
        Subtotal: <span>{totalAmount}$</span>
      </div>
      <div className={s.actionsInfo}>Shipping and taxes calculated at checkout</div>
      <div className={s.buttonWrapper}>{children}</div>
    </motion.div>
  )
}

export default SummaryInfo
