import assert from 'power-assert'

import { take, put, call, select } from 'redux-saga/effects'
import { fetchTopStories } from '../../src/sagas'
import { getNextPage } from '../../src/reducers'
import * as actions from '../../src/actions'
import * as api from '../../src/api'

describe('fetchTopStories', () => {
  it('call stories api and put recieve action', () => {
    const generator = fetchTopStories()
    const page = { start: 0, end: 10 }
    const ids = [111, 222, 333]
    const items = [ { id: 1 }, { id: 2 } ]

    assert.deepEqual(
      generator.next().value,
      select(getNextPage)
    )

    assert.deepEqual(
      generator.next(page).value,
      take(actions.REQUEST_TOP_STORIES)
    )

    assert.deepEqual(
      generator.next().value,
      call(api.fetchTopStories, page.start, page.end)
    )

    assert.deepEqual(
      generator.next(ids).value,
      call(api.fetchItems, ids)
    )

    assert.deepEqual(
      generator.next(items).value,
      put(actions.receiveTopStories(items))
    )

    assert.deepEqual(
      generator.next().value,
      select(getNextPage)
    )
  })
})
