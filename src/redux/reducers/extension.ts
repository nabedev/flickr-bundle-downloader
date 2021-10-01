import { createAction, createReducer } from '@reduxjs/toolkit'

// actions
// export const setExtensionEnabled = createAction<boolean, 'extension/enabled'>('extension/enabled')
export const toggleOverlay = createAction<boolean>('extension/toggleOverlay')
export const toggleToast = createAction<boolean>('extension/toggleToast')
export const overlayHidden = createAction<boolean>('extension/overlayHidden')
export const overlayShowed = createAction<boolean>('extension/overlayShowed')

// get local strage
type ExtensionState = { overlay: boolean; toast: boolean }
const initialState = { overlay: false, toast: false } as ExtensionState

// Reducers
export const extensionReducer = createReducer<ExtensionState>(
  initialState,
  builder => {
    builder
      // .addCase(setExtensionEnabled, (state, action) => {
      //   console.log(`[reducer] set state.enabled ${state.enabled} to ${action.payload.enabled}`)
      //   state.enabled = action.payload.enabled
      // })
      .addCase(overlayHidden, state => {
        state.overlay = false
      })
      .addCase(overlayShowed, state => {
        state.overlay = true
      })
  }
)
