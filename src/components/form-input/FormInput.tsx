import { FC } from 'react'
import { useField } from 'formik'
import cn from 'classnames'

import { Input } from 'UI'
import { InputCommonPropsType } from 'types'

import s from './FormInput.module.sass'

const FormInput: FC<InputCommonPropsType> = ({ label, name, type }) => {
  const [field, meta] = useField(name)
  const validationError = meta.touched && meta.error

  return (
    <div className={s.inputContainer}>
      <Input label={label} type={type} error={validationError} {...field} />
      {validationError && <span className={s.warningMessage}>{meta.error}</span>}
    </div>
  )
}

export default FormInput
