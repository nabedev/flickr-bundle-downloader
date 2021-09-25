import {
  createAction,
  createReducer,
  createEntityAdapter,
  configureStore,
} from '@reduxjs/toolkit'
import { state } from 'lit/decorators'

interface ExtensionState { extension: boolean, overlay: boolean, toast: boolean }

// actions
export const toggleExtension = createAction<ExtensionState>('extension/toggleExtension')
export const toggleOverlay = createAction<ExtensionState>('extension/toggleOverlay')
export const toggleToast = createAction<ExtensionState>('extension/toggleToast')
export const overlayHidden = createAction<ExtensionState>('extension/overlayHidden')
export const overlayShowed = createAction<ExtensionState>('extension/overlayShowed')

const initialState = { extension: false, overlay: false, toast: false }

// Reducers
export const extensionReducer = createReducer<SelectorState>(initialState, builder => {
  builder
    .addCase(toggleExtension, (state) => {
      state.extension = !state.extension
    })
    .addCase(overlayHidden, (state)=> {
      state.overlay = false
    })
    .addCase(overlayShowed, state=> {
      state.overlay = true
    })
})
