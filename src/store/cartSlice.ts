import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from 'types'

const cart = JSON.parse(localStorage.getItem('cart') || '[]') as ProductType[]

const cartSlice = createSlice({
  name: 'favouritesModal',
  initialState: {
    cart,
    cartStatus: false,
    cartTotal: [],
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
    removeItem(state, action: PayloadAction<ProductType>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCart(state, action: PayloadAction<ProductType[]>) {
      state.cart = action.payload
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    getCartTotal(state, action) {
      state.cart = []
      state.cart.push(action.payload)
    },
  },
})

export const { toggleCartModalStatus, addToCart, removeItem, updateCart } = cartSlice.actions

export default cartSlice.reducer
