import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from 'types/ProductType'

const cart = JSON.parse(localStorage.getItem('cart') || '[]') as ProductType[]

const cartSlice = createSlice({
  name: 'favouritesModal',
  initialState: {
    cart,
    cartStatus: false,
  },
  reducers: {
    addToCart(state, action: PayloadAction<ProductType | ProductType[]>) {
      if (Array.isArray(action.payload)) {
        state.cart = [...state.cart, ...action.payload]
      } else {
        state.cart.push(action.payload)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    toggleCartModalStatus(state) {
      state.cartStatus = !state.cartStatus
    },
  },
})

export const { toggleCartModalStatus, addToCart } = cartSlice.actions

export default cartSlice.reducer
