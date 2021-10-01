import { configureStore } from '@reduxjs/toolkit'

import { photosReducer } from './reducers/photo.ts'
import { extensionReducer } from './reducers/extension.ts'

const store = configureStore({
  reducer: {
    photos: photosReducer,
    extension: extensionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
