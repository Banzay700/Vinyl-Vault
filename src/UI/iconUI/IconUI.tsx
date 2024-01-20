import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

import s from './IconUI.module.scss'

interface IconUIProps {
  onClick: () => void
  title: string
  children: ReactNode
  style?: string
}

const IconUI: FC<IconUIProps> = ({ onClick, title, children, style }) => {
  return (
    <motion.button
      className={cn(s.btnWrapper, style)}
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
