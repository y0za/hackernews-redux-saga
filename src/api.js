import Firebase from 'firebase'

const api = new Firebase('https://hacker-news.firebaseio.com/v0')

export function fetchTopStories(start, end) {
  return new Promise((resolve, reject) => {
    api.child('topstories').once('value', (snapshot) => {
      resolve(snapshot.val().slice(start, end))
    }, reject)
  })
}

export function fetchItem(id) {
  return new Promise((resolve, reject) => {
    api.child(`item/${id}`).once('value', (snapshot) => {
      console.log(snapshot.val())
      resolve(snapshot.val())
    }, reject)
  })
}

export function fetchItems(ids) {
  return Promise.all(ids.map((id) => {
    return fetchItem(id)
  }))
}
