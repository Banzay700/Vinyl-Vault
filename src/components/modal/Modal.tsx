import React, { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

import { modalAnimation } from 'tools'
import s from './Modal.module.scss'

interface ModalProps {
  handleClose: () => void
  heading: string
  itemCount: number
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ children, handleClose, heading, itemCount }) => {
  return (
    <div>
      <div className={s.overlay} onClick={handleClose} />
      <motion.div className={s.modal} {...modalAnimation}>
        <CloseOutlined className={s.closeIcon} onClick={handleClose} />
        <div className={s.modalTitle}>{heading}</div>
        <div className={s.modalItemCounter}>{itemCount} items</div>
        <div className={s.content}>{children}</div>
      </motion.div>
    </div>
  )
}

export default Modal
