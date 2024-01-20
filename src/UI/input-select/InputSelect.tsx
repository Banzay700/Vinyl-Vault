import React, { FC } from 'react'
import { InputNumber } from 'antd'

import s from './InputSelect.module.scss'

interface InputNumberProps {
  value: number
  max: number
  size?: 'small' | 'middle' | 'large' | undefined
  onChange: (value: number | null) => void
}

const InputSelect: FC<InputNumberProps> = ({ value, max, size, onChange }) => {
  return (
    <div className={s.inputNumberWrapper}>
      <InputNumber
        className={s.inputNumber}
        defaultValue={value}
        min={1}
        max={max}
        onChange={onChange}
        size={size}
      />
    </div>
  )
}

export default InputSelect
