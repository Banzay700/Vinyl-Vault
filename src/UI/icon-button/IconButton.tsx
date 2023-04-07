import React, { FC } from 'react'
import { Badge } from 'antd'
import { motion } from 'framer-motion'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import s from './IconButton.module.scss'

interface IconButtonProps {
  onClick: () => void
  counter?: number
  defaultStyle: boolean
}

const IconButton: FC<IconButtonProps> = ({ onClick, counter, defaultStyle }) => {
  const iconStyle = defaultStyle ? (
    <HeartOutlined style={{ fontSize: '28px' }} title="Favourits" />
  ) : (
    <ShoppingCartOutlined style={{ fontSize: '28px' }} title="Cart" />
  )

  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      className={s.iconButton}
      type="submit"
      onClick={onClick}>
      {iconStyle}
      <div className={s.badgeWrapper}>{!!counter && <Badge count={counter} color="#0c151c" />}</div>
    </motion.button>
  )
}

IconButton.defaultProps = {
  counter: 0,
}

export default IconButton
