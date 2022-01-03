import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './title/titleSlice'
import navReducer from './nav/navSlice'

export default configureStore({
  reducer: {
      title: titleReducer,
      nav: navReducer
  },
})