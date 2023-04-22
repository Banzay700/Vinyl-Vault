import { Breadcrumb } from 'antd'
import { useNavigate } from 'react-router-dom'

import s from './Breadcrumb.module.sass'

const CheckoutBreadcrumb = () => {
  const navigate = useNavigate()

  const goBack = (
    <button type="submit" onClick={() => navigate(-1)}>
      Cart
    </button>
  )
  return (
    <div className={s.breadcrumbContainer}>
      <Breadcrumb
        items={[
          { title: goBack },
          { title: 'Information' },
          // { title: 'Shipping' },
          // { title: 'Payment' },
          // { title: 'Review' },
        ]}
      />
    </div>
  )
}

export default CheckoutBreadcrumb
