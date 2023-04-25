import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { CountrySelect, Input, InputPhoneNumber } from 'components'
import { Button } from 'UI'
import { useCartReducer } from 'utils'
import { CheckoutFormValuesType } from 'types'
import { initialValues, validationSchema } from './informationStep.utils'

import s from './InformationStep.module.sass'

const InformationStep = () => {
  const { cartProducts } = useCartReducer()

  const navigate = useNavigate()

  const order = cartProducts.map(({ id, artist, price, sold, total }) => {
    return { id, artist, price, sold, total }
  })

  const onSubmit = (values: CheckoutFormValuesType) => {
    const orderInfo = { ...values, order }

    console.log(orderInfo)
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(props) => (
          <Form>
            <CountrySelect name="country" label="Country" />
            <div className={s.row}>
              <Input name="firstname" label="First name" type="text" />
              <Input name="lastname" label="Last name" type="text" />
            </div>
            <Input name="address" label="Address" type="text" />
            <div className={s.row}>
              <Input name="apartment" label="Appartment, etc. (optional)" type="text" />
              <Input name="age" label="Age" type="number" />
            </div>
            <div className={s.row}>
              <Input name="postalCode" label="Postal Code (optional)" type="number" />
              <Input name="city" label="City" type="text" />
            </div>
            <InputPhoneNumber name="phone" label="Phone" />
            <div className={s.formActions}>
              <div className={s.backLink}>
                <button onClick={() => navigate(-1)} type="submit">
                  Return to cart
                </button>
              </div>
              <div className={s.buttonWrapper}>
                <Button primary>Checkout</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InformationStep
