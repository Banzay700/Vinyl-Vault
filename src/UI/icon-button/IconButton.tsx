import React, { FC, useState } from 'react'
import { Badge } from 'antd'
import { motion } from 'framer-motion'

import s from './IconButton.module.scss'

interface IconButtonProps {
  children: React.ReactNode
  onClick: () => void
  labelValue?: number
}

const IconButton: FC<IconButtonProps> = ({ children, onClick, labelValue = 0 }) => {
  const [count, setCount] = useState(0)

  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      className={s.iconButton}
      type="submit"
      onClick={onClick}>
      {children}
      <div className={s.badgeWrapper}>
        {!!labelValue && <Badge count={labelValue} color="#18181b" />}
      </div>
    </motion.button>
  )
}

IconButton.defaultProps = {
  labelValue: 0,
}

export default IconButton
