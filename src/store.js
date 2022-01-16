import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './title/titleSlice'
import navReducer from './nav/navSlice'
import articleReducer from './article/articleSlice'
import postListReducer from './article/post/list/postListSlice'

export default configureStore({
  reducer: {
      title: titleReducer,
      nav: navReducer,
      article: articleReducer,
      postList: postListReducer
  },
})