import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './title/titleSlice'

export default configureStore({
  reducer: {
      title: titleReducer
  },
})