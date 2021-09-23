import { createStore } from 'redux'

// actions
const COUNT_UP = 'count-up'
const countUp = { type: COUNT_UP }

// reducer
const initState = { counter: 0 }
const reducer = (state = initState, action) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, counter: ++state.counter }
    default:
      return state
  }
}

const store = createStore(reducer) // store

export {
  store,
  countUp,
}