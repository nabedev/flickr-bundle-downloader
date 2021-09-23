import { createAction } from '@reduxjs/toolkit'

const increment = createAction<number>('photos/selected')
const decrement = createAction<number>('photos/unselected')


