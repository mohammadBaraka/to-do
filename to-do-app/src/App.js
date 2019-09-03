import React, { Component } from 'react';
import TodoItems from './Components/TodoItem/TodoItem.js';
import AddItem from "./Components/AddItem/AddItem.js";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Mohammad", age: 27 },
      { id: 2, name: "Ahmad", age: 24 },
      { id: 3, name: "Hamza", age: 26 }
    ]
  };

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    })
    this.setState({items})
  }
  addItem = (item) => {
    item.id = Math.random() 
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo list</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
