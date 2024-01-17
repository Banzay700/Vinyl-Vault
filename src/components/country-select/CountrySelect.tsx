import { FC } from 'react'
import cn from 'classnames'
import { useField, useFormikContext } from 'formik'
import { CountryDropdown } from 'react-country-region-selector'

import s from './CountrySelect.module.scss'

interface CountrySelectProps {
  name: string
  label: string
}

const CountrySelect: FC<CountrySelectProps> = ({ name, label }) => {
  const [field, meta] = useField(name)
  const { setFieldValue } = useFormikContext()
  const validationError = meta.touched && meta.error
  const onChange = (value: string) => setFieldValue(name, value)

  return (
    <div className={s.selectContainer}>
      <div className={cn(s.selectWrapper, { [s.inputError]: validationError })}>
        <CountryDropdown classes={s.select} {...field} onChange={onChange} defaultOptionLabel="" />
        <span
          className={cn(
            s.label,
            { [s.selected]: field.value !== '' },
            { [s.labelError]: validationError },
          )}>
          {label}
        </span>
      </div>
      {validationError && <span className={s.warningMessage}>{meta.error}</span>}
    </div>
  )
}

export default CountrySelect
