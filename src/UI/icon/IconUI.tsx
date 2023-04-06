import { FC } from 'react'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

interface IconProps {
  type: 'heart' | 'cart'
}

const IconUI: FC<IconProps> = ({ type }) => {
  return (
    <div>
      {type === 'heart' ? (
        <HeartOutlined style={{ fontSize: '28px' }} title="Favourits" />
      ) : (
        <ShoppingCartOutlined style={{ fontSize: '28px' }} title="Cart" />
      )}
    </div>
  )
}

export default IconUI
