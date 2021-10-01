import {
  createAction,
  createReducer,
  createEntityAdapter,
} from '@reduxjs/toolkit'

type Positions = {
  top: number
  left: number
  width: number
  height: number
}
export type Photo = {
  id: number
  url: string
  selected: boolean
  positions: Positions
}

// Adapters
const photosAdapter = createEntityAdapter<Photo>()

const initialState = photosAdapter.getInitialState()
export type PhotoState = ReturnType<typeof photosAdapter.getInitialState>

export const { selectById, selectAll } = photosAdapter.getSelectors<PhotoState>(
  state => state.photos
)

// actions
export const photoAdded = createAction<Photo>('photos/added')
export const togglePhotoSelected =
  createAction<{ id: string; selected: boolean }>('photos/toggle')
export const selectedAllPhoto = createAction('photos/selectedAll')
export const deselectedAllPhoto = createAction('photos/deselectedAll')
export const positionChanged = createAction<{
  id: string
  positions: Positions
}>('photos/positionChanged')
export const positionChangedAll = createAction<Positions>(
  'photos/positionChangedAll'
)

// Reducers
export const photosReducer = createReducer<PhotoState>(
  initialState,
  builder => {
    builder
      .addCase(photoAdded, (state, action) => {
        photosAdapter.addOne(state, action.payload)
      })
      .addCase(togglePhotoSelected, (state, action) => {
        state.entities[action.payload.id].selected =
          !state.entities[action.payload.id].selected
      })
      .addCase(selectedAllPhoto, state => {
        Object.values(state.entities).forEach(entity => {
          entity.selected = true
        })
      })
      .addCase(deselectedAllPhoto, state => {
        Object.values(state.entities).forEach(entity => {
          entity.selected = false
        })
      })
      .addCase(positionChanged, (state, action) => {
        state.entities[action.payload.id].positions = action.payload.positions
      })
      .addCase(positionChangedAll, (state, action) => {
        Object.values(state.entities).forEach(entity => {
          entity.positions = action.payload
        })
      })
  }
)
