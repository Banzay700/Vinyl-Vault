import { FC } from 'react'
import { InputNumber } from 'antd'

import s from './InputNumberUI.module.sass'

interface InputNumberProps {
  defaultValue: number
  max: number
  onChange: () => void
}

const InputNumberUI: FC<InputNumberProps> = ({ defaultValue, max, onChange }) => {
  return (
    <div className={s.inputNumberWrapper}>
      <InputNumber
        className={s.inputNumber}
        defaultValue={defaultValue}
        min={1}
        max={max}
        onChange={onChange}
      />
    </div>
  )
}

export default InputNumberUI
