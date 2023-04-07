import React, { FC } from 'react'
import { Badge } from 'antd'
import { motion } from 'framer-motion'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import s from './IconButton.module.scss'

interface IconButtonProps {
  onClick: () => void
  labelValue?: number
  defaultStyle: boolean
}

const IconButton: FC<IconButtonProps> = ({ onClick, labelValue, defaultStyle }) => {
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
      <div className={s.badgeWrapper}>
        {!!labelValue && <Badge count={labelValue} color="#0c151c" />}
      </div>
    </motion.button>
  )
}

IconButton.defaultProps = {
  labelValue: 0,
}

export default IconButton
