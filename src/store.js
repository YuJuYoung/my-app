import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './title/titleSlice'
import navReducer from './nav/navSlice'
import postReducer from './article/post/postSlice'
import userReducer from './article/user/userSlice'
import transactionSlice from './article/transaction/transactionSlice'


export default configureStore({
  reducer: {
      title: titleReducer,
      nav: navReducer,
      user: userReducer,
      post: postReducer,
      transaction: transactionSlice
  },
})