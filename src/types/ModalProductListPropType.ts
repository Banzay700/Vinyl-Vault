import { ProductType } from 'types/ProductType'

type CommonProps = {
  products: ProductType[]
}

type CartViewType = CommonProps & { cartView: boolean; favoriteView?: never }
type FavoriteType = CommonProps & { cartView?: never; favoriteView: boolean }

export type ModalProductListProps = CartViewType | FavoriteType
