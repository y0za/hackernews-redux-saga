import { take, put, call, select, fork } from 'redux-saga/effects'
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

export default function* rootSaga() {
  yield fork(fetchTopStories)
}
