import { number, object, string } from 'yup'

export const initialValues = {
  firstname: '',
  lastname: '',
  age: '',
  address: '',
  apartment: '',
  postalCode: '',
  country: '',
  city: '',
  phone: '',
}

export const validationSchema = object().shape({
  firstname: string()
    .min(3, 'First name must be at least 3 characters long')
    .max(50, 'First name must be at most 50 characters')
    .required('First name is a required field'),
  lastname: string()
    .min(3, 'Last name must be at least 3 characters long')
    .max(50, 'Last name must be at most 50 characters')
    .required('Last name is a required field'),
  age: number()
    .positive()
    .integer()
    .min(16, 'Age must be greater than or equal to 16')
    .max(100, 'Age must be less than or equal to 100')
    .required('Age is a required field'),
  address: string().required('Address is a required field'),
  apartment: string().max(50, 'Apartment must be at most 50 characters').optional(),
  postalCode: string().max(15).optional(),
  country: string().required('Country is a required field'),
  city: string()
    .matches(/^[a-zA-Z\s-]+$/, 'City name must contain only alphabetic characters')
    .required('City name is required'),
  phone: string().required('Phone is a required field'),
})
