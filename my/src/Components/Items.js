import React, { Component } from 'react';
import ItemList from './ItemList';

class Items extends Component {
  render() {
    return (
      <div className="Row2">
        <h3>Items</h3>
        <ItemList items={this.props.items} handleClickItem={this.props.handleClickItem}/>
      </div>
    );
  }
}

export default Items;