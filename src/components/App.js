import React, { Component } from 'react'
import ItemList from './ItemList'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Hackernews redux-saga</h2>
        <ItemList />
      </div>
    )
  }
}
