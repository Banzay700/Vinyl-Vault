import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ProductType } from 'types/ProductType'

type CollectionState = {
  collection: ProductType[]
  loading: boolean
  error: string | null | undefined
}

export const getCollection = createAsyncThunk<ProductType[], unknown, { rejectValue: string }>(
  'collection/getCollection',
  async (_, { rejectWithValue }) => {
    const res = await fetch('http://localhost:3001/collection')
    const data = await res.json()

    if (!res.ok) {
      return rejectWithValue('Error')
    }
    return data
  },
)

const initialState: CollectionState = {
  collection: [],
  loading: false,
  error: null,
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollection.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCollection.fulfilled, (state, action) => {
        state.loading = false
        state.collection = action.payload
      })
      .addCase(getCollection.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export default collectionSlice.reducer
// TODO: add options to pending and rejected cases
