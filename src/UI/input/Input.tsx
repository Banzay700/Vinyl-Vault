import { FC } from 'react'
import cn from 'classnames'

import { InputCommonPropsType } from 'types'

import s from './Input.module.sass'

interface InputProps extends InputCommonPropsType {
  error?: string | boolean | undefined
}

const Input: FC<InputProps> = ({ label, name, type, error, ...props }) => {
  return (
    <div className={cn(s.inputWrapper, { [s.inputError]: error })}>
      <input className={s.input} type={type} id={name} placeholder={label} {...props} />
      <label className={cn(s.label, { [s.labelError]: error })} htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export default Input
