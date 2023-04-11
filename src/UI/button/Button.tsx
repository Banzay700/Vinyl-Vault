import { motion } from 'framer-motion'

import React, { FC } from 'react'

import s from './Button.module.sass'

interface ButtonProps {
  children: string | React.ReactNode
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button onClick={onClick} whileTap={{ scale: 0.99 }} className={s.button} type="submit">
      {children}
    </motion.button>
  )
}

export default Button
