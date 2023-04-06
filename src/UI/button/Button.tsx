import React, { FC } from 'react'
import { motion } from 'framer-motion'

import s from './Button.module.scss'

interface ButtonProps {
  children: string
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <motion.button whileTap={{ scale: 0.99 }} className={s.button} type="submit">
      {children}
    </motion.button>
  )
}

export default Button
