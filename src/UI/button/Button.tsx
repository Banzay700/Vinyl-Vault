import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import s from './Button.module.scss'

interface ButtonProps {
  children: string
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
