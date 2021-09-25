import { configureStore } from '@reduxjs/toolkit'

import { photosReducer } from './reducers/photo.ts'
import { extensionReducer } from './reducers/extension.ts'


export default store = configureStore({
  reducer: {
    photos: photosReducer,
    extension: extensionReducer
  },
})
