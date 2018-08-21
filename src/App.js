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
      ],
      newTodoDescription: ''
    };
  }
  
  toggleComplete(index) {
    const todos = this.state.todos.slice();  //this line makes a copy of the todos array in the state object above
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true; //if statement says: if index of the todo array's isCompleted is true, change it to false; otherwise, change it to true
    this.setState({ 
      todos: todos 
    }); //this seems confusing, but it isn't: this is setting the todos array listed in the state above to the todos constant initalized in this function
  }

  handleSubmit(e) {
    e.preventDefault(); //preventDefault() prevents the page from reloading when submit button clicked
    if (!this.state.newTodoDescription) { return } //this says, if there is no value for newTodoDescription, end the process (i.e. don't create new todo)
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false }; //Sets new variable (newTodo)'s description equal to latest state of mewTodoDescription which was changed by the handleChange() method
    this.setState({
      todos: [...this.state.todos, newTodo], //spread says "take everything in the this.state.todos array" then add newTodo to the end
      newTodoDescription: ''
    });
  }

  handleChange(e) {
    this.setState({
      newTodoDescription: e.target.value //grabs the value of the target. In this case, the text input since this is where handleChange is called
    });
  }

  deleteToDo(index) { 
    this.setState({
      todos: this.state.todos.filter( (item) => item !== this.state.todos[index])
    })
  }

  

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map( (todo, index) => 
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteToDo={ () => this.deleteToDo(index) } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }> 
          <input type='text' value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type='submit' />
        </form>
      </div>
    );
  }
}


export default App;


