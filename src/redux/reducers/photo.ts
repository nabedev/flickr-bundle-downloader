import { createAction, createReducer } from '@reduxjs/toolkit'

interface SelectorState {
  photos: { id: number, url: string }[]
}

const selected = createAction<number>('photos/selected')
const unselected = createAction<number>('photos/unselected')

const initialState = [] as SelectorState

const selectorReducer = createReducer(initialState, builder => {
  builder
    .addCace(selected, (state, action) => {
      
    })
})
