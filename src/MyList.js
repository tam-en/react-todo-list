import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';


class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    return (
      <div className="wrapper">
        <h1>Just do it: </h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList;
