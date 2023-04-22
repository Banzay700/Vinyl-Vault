import React, { FC } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

import { ButtonProps } from 'types'

import s from './Button.module.sass'

const Button: FC<ButtonProps> = ({ children, onClick, icon, secondary, primary }) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.99 }}
      className={cn(s.button, { [s.secondary]: secondary }, { [s.primary]: primary })}
      type="submit">
      {children}
      <div>{icon}</div>
    </motion.button>
  )
}

export default Button
