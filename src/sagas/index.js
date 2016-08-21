import { take, put, call, select, fork } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { getNextPage } from '../reducers'
import * as actions from '../actions'
import * as api from '../api'

export function* fetchTopStories() {
  while (true) {
    const { start, end } = yield select(getNextPage)
    yield take(actions.REQUEST_TOP_STORIES)

    const ids = yield call(api.fetchTopStories, start, end)
    const items = yield call(api.fetchItems, ids)
    yield put(actions.receiveTopStories(items))
  }
}

export function* infiniteScroll() {
  const offset = 100
  const chan = yield call(scrollChannel, offset)
  while (true) {
    yield take(chan)
    yield put(actions.requestTopStories())
  }
}

export function scrollChannel(offset) {
  return eventChannel((emit) => {
    window.addEventListener('scroll', () => {
      const scrollTop = document.body.scrollTop
      const bodyTop = document.body.clientHeight - window.innerHeight
      if (scrollTop >= bodyTop - offset) {
        emit(scrollTop)
      }
    }, false)

    return () => {
    }
  })
}

export default function* rootSaga() {
  yield fork(fetchTopStories)
  yield fork(infiniteScroll)
}
