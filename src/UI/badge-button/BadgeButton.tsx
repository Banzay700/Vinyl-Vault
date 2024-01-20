import React, { FC } from 'react'
import { Badge } from 'antd'
import { motion } from 'framer-motion'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import { IconButtonPropsType } from 'types'

import s from './BadgeButton.module.scss'

const BadgeButton: FC<IconButtonPropsType> = ({ onClick, counter, primary, secondary }) => {
  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      className={s.iconButton}
      type="submit"
      onClick={onClick}>
      {primary && <HeartOutlined title="Favourits" />}
      {secondary && <ShoppingCartOutlined title="Cart" />}
      <div className={s.badgeWrapper}>{!!counter && <Badge count={counter} color="#0c151c" />}</div>
    </motion.button>
  )
}

export default BadgeButton
