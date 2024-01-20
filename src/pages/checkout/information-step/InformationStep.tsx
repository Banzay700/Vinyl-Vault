import { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'

import { useNavigate } from 'react-router-dom'
import { CountrySelect, FormInput, InputPhoneNumber } from 'components'
import { Button } from 'UI'
import { useCartReducer } from 'utils'
import { CheckoutFormValuesType } from 'types'

import { initialValues, validationSchema } from './informationStep.utils'
import s from './InformationStep.module.scss'

const InformationStep = () => {
  const [formValues, setFormValues] = useState(initialValues)
  const { cartProducts } = useCartReducer()

  const navigate = useNavigate()

  const order = cartProducts.map(({ id, artist, price, sold, total }) => {
    return { id, artist, price, sold, total }
  })

  const onSubmit = (values: CheckoutFormValuesType) => {
    const orderInfo = { ...values, order }
    sessionStorage.setItem('userInfo', JSON.stringify(values))
    navigate('shipping')
  }

  useEffect(() => {
    const values = JSON.parse(sessionStorage.getItem('userInfo') || 'null')
    setFormValues(values)
  }, [])

  return (
    <div>
      <Formik
        initialValues={formValues || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize>
        {() => (
          <Form>
            <CountrySelect name="country" label="Country" />
            <div className={s.row}>
              <FormInput name="firstname" label="First name" type="text" />
              <FormInput name="lastname" label="Last name" type="text" />
            </div>
            <FormInput name="address" label="Address" type="text" />
            <div className={s.row}>
              <FormInput name="apartment" label="Appartment, etc. (optional)" type="text" />
              <FormInput name="age" label="Age" type="number" />
            </div>
            <div className={s.row}>
              <FormInput name="postalCode" label="Postal Code (optional)" type="number" />
              <FormInput name="city" label="City" type="text" />
            </div>
            <InputPhoneNumber name="phone" label="Phone" />
            <div className={s.formActions}>
              <div className={s.backLink}>
                <button onClick={() => navigate(-1)} type="submit">
                  Return to cart
                </button>
              </div>
              <div className={s.buttonWrapper}>
                <Button primary>Continue to shipping</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InformationStep
