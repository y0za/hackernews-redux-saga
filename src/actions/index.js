import { createAction } from 'redux-actions'

export const REQUEST_TOP_STORIES = 'REQUEST_TOP_STORIES'
export const RECEIVE_TOP_STORIES = 'RECEIVE_TOP_STORIES'
export const requestTopStories = createAction(REQUEST_TOP_STORIES)
export const receiveTopStories = createAction(RECEIVE_TOP_STORIES)
