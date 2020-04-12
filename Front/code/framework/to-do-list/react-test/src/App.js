import React, { Component } from 'react';
import logo from './logo.svg';  //可注释
import './App.css';  //可注释

import Todo from './components/todo/index.js'

class App extends Component {
  render() {
    return (
      <div>
        <Todo/>
      </div>
    );
  }
}

/*
    React.createElement(
      "div",
      null,
      React.createElement(Todo, null)
    );

    var todo = new Todo()
    return todo.render()
*/

export default App;
