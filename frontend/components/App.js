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

  render() {
    const { toDoItems } = this.state;

    return (
      <div>
        <h1>To Do App</h1>

        <TodoList toDoItems={toDoItems} />

        <Form />

        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
