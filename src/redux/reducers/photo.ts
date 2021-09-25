import {
  createAction,
  createReducer,
  createEntityAdapter,
  configureStore,
} from '@reduxjs/toolkit'

type Photo = { id: number, url: string, selected: boolean }

// Adapters
const photosAdapter = createEntityAdapter<Photo>()
const initialState = photosAdapter.getInitialState()
export const { selectById, selectAll } = photosAdapter.getSelectors(state => state.photos)

interface SelectorState {
  photos: Photo[]
}

// actions
export const photoAdded = createAction<SelectorState>('photos/added')
export const togglePhotoSelected = createAction<SelectorState>('photos/toggle')
export const selectedAllPhoto = createAction<SelectorState>('photos/selectedAll')
export const deselectedAllPhoto = createAction<SelectorState>('photos/deselectedAll')


// Reducers
export const photosReducer = createReducer<SelectorState>(initialState, builder => {
  builder
    .addCase(photoAdded, (state, action) => {
      photosAdapter.addOne(state, action.payload)
    })
    .addCase(togglePhotoSelected, (state, action) => {
      state.entities[action.payload.id].selected = !state.entities[action.payload.id].selected
    })
    .addCase(selectedAllPhoto, (state) => {
      Object.values(state.entities).forEach(entity => { entity.selected = true })
    })
    .addCase(deselectedAllPhoto, (state) => {
      Object.values(state.entities).forEach(entity => { entity.selected = false })
    })
})
