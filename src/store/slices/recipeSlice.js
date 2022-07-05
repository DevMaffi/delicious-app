import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getDetails } from '../../services/recipesService'

const initialState = {
  activeTab: 'instructions',
  loading: false,
  details: [],
  error: null,
}

export const fetchDetails = createAsyncThunk('recipe/fetchDetails', id =>
  getDetails(id)
)

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    changeTab: (state, action) => ({
      ...state,
      activeTab: action.payload,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDetails.pending, state => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchDetails.fulfilled, (state, action) => ({
        ...state,
        details: action.payload,
        loading: false,
      }))
      .addCase(fetchDetails.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
      }))
      .addDefaultCase(state => state)
  },
})

export default recipeSlice.reducer
export const { changeTab } = recipeSlice.actions
