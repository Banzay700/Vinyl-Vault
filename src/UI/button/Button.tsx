import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import React, { FC } from 'react'

import s from './Button.module.scss'

interface ButtonProps {
  children: string | React.ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <Link to="about">
      <motion.button whileTap={{ scale: 0.99 }} className={s.button} type="submit">
        {children}
      </motion.button>
    </Link>
  )
}

export default Button
