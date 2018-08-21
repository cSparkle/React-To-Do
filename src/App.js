import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { description: 'do the dishes', isCompleted: false },
        { description: 'pack for trip', isCompleted: false },
        { description: 'finish Module 1 of WDT', isCompleted: true },
        { description: 'fill the cat food bowl', isCompleted: false },
        { description: 'make a smoothie', isCompleted: true }
      ]
    };
  }
  
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map( (todo, index) => 
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted }/>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
