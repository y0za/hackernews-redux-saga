import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { title, url, by } = this.props

    return (
      <li>
        <a href={url}>
          <div>
            <h3>{title}</h3>
            <p>by: {by}</p>
          </div>
        </a>
      </li>
    )
  }
}
