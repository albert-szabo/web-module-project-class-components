import React from 'react';

import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: [
        {
          name: 'Organize garage',
          id: 1,
          completed: false
        },
        {
          name: 'Bake cookies',
          id: 2,
          completed: false
        },
        {
          name: 'Feed the cat',
          id: 3,
          completed: false
        },
        {
          name: 'Take out the trash',
          id: 4,
          completed: false
        },
        {
          name: 'Go for a walk',
          id: 5,
          completed: false
        }
      ]
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      toDoItems: this.state.toDoItems.filter(task => {
        return (task.completed === false);
      })
    })
  }

  handleAdd = (task) => {
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      toDoItems: [...this.state.toDoItems, newTask]
    })
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      toDoItems: this.state.toDoItems.map(task => {
        if (task.id === clickedId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  render() {
    const { toDoItems } = this.state;

    return (
      <div>
        <h1>To Do</h1>

        <TodoList toDoItems={toDoItems} handleToggle={this.handleToggle}/>

        <Form handleAdd={this.handleAdd}/>

        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
