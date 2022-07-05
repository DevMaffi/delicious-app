import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import * as reducer from './slices/reducers'

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => {
    return [...getDefaultMiddleware(), logger]
  },
})

export default store
