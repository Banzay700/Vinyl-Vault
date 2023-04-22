import { FC, useState } from 'react'
import cn from 'classnames'
import { useField, useFormikContext } from 'formik'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import s from './InputPhoneNumber.module.sass'

interface InputPhoneNumberProps {
  name: string
  label: string
}

const InputPhoneNumber: FC<InputPhoneNumberProps> = ({ name, label }) => {
  const [labelStyle, setLabelStyle] = useState(false)
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const onChange = (value: string) => setFieldValue(name, value)
  const onFocus = () => setLabelStyle(true)
  const onBlur = () => {
    if (!field.value) setLabelStyle(false)
  }

  const validationError = meta.touched && meta.error

  return (
    <div className={s.phoneContainer}>
      <div className={cn(s.phoneWrapper, { [s.inputError]: validationError })}>
        <PhoneInput
          {...field}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder=""
          inputClass={s.formControl}
          containerClass={s.container}
          buttonClass={s.flagDropdown}
        />
        <span
          className={cn(
            s.label,
            { [s.selected]: labelStyle || field.value },
            { [s.labelError]: validationError },
          )}>
          {label}
        </span>
      </div>
      {validationError && <span className={s.warningMessage}>{meta.error}</span>}
    </div>
  )
}

export default InputPhoneNumber
