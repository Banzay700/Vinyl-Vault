import s from 'pages/checkout/total/Total.module.sass'
import { Input } from 'UI/input'
import { Button } from 'UI/button'

interface TotalInfoProps {
  total: number
}

const TotalInfo = ({ total }: TotalInfoProps) => {
  const shipping = 'Calculated at next step'

  return (
    <div className={s.totalInfo}>
      <div className={s.discount}>
        <Input name="discount" type="text" label="Discount code" />
        <Button>Apply</Button>
      </div>
      <div className={s.subtotal}>
        <div>
          Subtotal: <span className={s.price}>${total}</span>
        </div>
        <div>
          Shipping: <span className={s.price}>{shipping}</span>
        </div>
      </div>
      <div className={s.totalRow}>
        Total: <span className={s.totalPrice}>${total}</span>
      </div>
    </div>
  )
}

export default TotalInfo
