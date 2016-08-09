import { combineReducers } from 'redux'
import * as actions from '../actions'

const loadItemsLimit = 10

const initialState = {
  app: {
    loading: false,
    items: []
  },
  nextPage: {
    start: 0,
    end: loadItemsLimit
  }
}

function app(state = initialState.app, { type, payload }) {
  switch (type) {
    case actions.REQUEST_TOP_STORIES:
      return { ...state, loading: true }
    case actions.RECEIVE_TOP_STORIES:
      return { loading: false, items: [...state.items, ...payload] }
    default:
      return state
  }
}

function nextPage(state = initialState.nextPage, { type }) {
  switch (type) {
    case actions.RECEIVE_TOP_STORIES:
      return {
        start: state.end,
        end: state.end + loadItemsLimit
      }
    default:
      return state
  }
}

export function getNextPage(state) {
  return state.nextPage
}

export default combineReducers({
  app,
  nextPage
})
