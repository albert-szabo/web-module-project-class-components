import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (<ul>
      {
        this.props.toDoItems.map(task => {
          return (<Todo key={task.id} task={task} handleToggle={this.props.handleToggle}/>)
        })
      }
    </ul>)
  }
}
