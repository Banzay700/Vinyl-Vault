import { FC } from 'react'
import { useField } from 'formik'
import cn from 'classnames'

import s from './Input.module.sass'

interface InputProps {
  label: string
  name: string
  type: 'text' | 'number'
}

const Input: FC<InputProps> = ({ label, name, type }) => {
  const [field, meta] = useField(name)
  const validationError = meta.touched && meta.error

  return (
    <div className={s.inputContainer}>
      <div className={cn(s.inputWrapper, { [s.inputError]: validationError })}>
        <input className={s.input} type={type} id={name} placeholder={label} {...field} />
        <label className={cn(s.label, { [s.labelError]: validationError })} htmlFor={name}>
          {label}
        </label>
      </div>
      {validationError && <span className={s.warningMessage}>{meta.error}</span>}
    </div>
  )
}

export default Input
