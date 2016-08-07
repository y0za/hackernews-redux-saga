import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'

export class ItemList extends Component {
  render() {
    const { items } = this.props

    return (
      <ul>
        {items.map(item =>
          <Item
            key={item.id}
            title={item.title}
            url={item.url}
            by={item.by} />
        )}
      </ul>
    )
  }
}

function mapItemsToProps(state) {
  return {
    items: state.app.items
  }
}

export default connect(
  mapItemsToProps
)(ItemList)

