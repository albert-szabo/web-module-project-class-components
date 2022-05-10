import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (<ul>
      {
        this.props.toDoItems.map(task => {
          return (<Todo task={task}/>)
        })
      }
    </ul>)
  }
}
