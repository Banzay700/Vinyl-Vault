import React, { FC } from 'react'
import { CloseOutlined } from '@ant-design/icons'

import { MODAL_DEFAULT_TYPE } from 'constants'
import { Button } from 'UI'
import { ModalEvents } from './modal-events'
import s from './Modal.module.scss'

interface ModalProps {
  close: () => void
  type: 'cart' | 'favourite'
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ children, close, type }) => {
  const isDefault = type === MODAL_DEFAULT_TYPE

  const modalTitle = isDefault ? 'You cart' : 'Favourites'
  const buttonText = isDefault ? 'Checkout' : 'Add to cart'

  return (
    <>
      <div className={s.overlay} onClick={close} />
      <div className={s.modal}>
        <CloseOutlined className={s.closeIcon} onClick={close} />
        <div className={s.modalTitle}>{modalTitle}</div>
        <div className={s.content}>{children}</div>
        <ModalEvents>
          <Button>{buttonText}</Button>
        </ModalEvents>
      </div>
    </>
  )
}

export default Modal
