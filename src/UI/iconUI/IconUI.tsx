import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

import s from './IconUI.module.sass'

interface IconUIProps {
  onClick: () => void
  title: string
  children: ReactNode
}

const IconUI: FC<IconUIProps> = ({ onClick, title, children }) => {
  return (
    <motion.button
      className={s.btnWrapper}
      whileTap={{ scale: 1.1 }}
      whileHover={{ color: '#0c151c' }}
      type="submit"
      title={title}
      onClick={onClick}>
      {children}
    </motion.button>
  )
}

export default IconUI
