import { Breadcrumb } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import s from './Breadcrumb.module.scss'

const CheckoutBreadcrumb = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log(pathname)

  const goBack = (
    <button type="submit" onClick={() => navigate('/collection')}>
      Cart
    </button>
  )
  return (
    <div className={s.breadcrumbContainer}>
      <Breadcrumb
        items={[
          { title: goBack },
          {
            title: (
              <button type="submit" onClick={() => navigate('/information')}>
                Information
              </button>
            ),
          },
          {
            title: (
              <button type="submit" onClick={() => navigate('/information/shipping')}>
                Shipping
              </button>
            ),
          },
          // { title: 'Payment' },
          // { title: 'Review' },
        ]}
      />
    </div>
  )
}

export default CheckoutBreadcrumb
