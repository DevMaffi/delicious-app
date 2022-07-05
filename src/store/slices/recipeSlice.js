import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: 'instructions',
}

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    changeTab: (state, action) => ({
      ...state,
      activeTab: action.payload,
    }),
  },
})

const { reducer, actions } = recipeSlice

export default reducer
export const { changeTab } = actions
