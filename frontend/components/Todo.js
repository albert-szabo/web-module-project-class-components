import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (<li>{this.props.task.name} {this.props.task.completed ? <span>-completed</span> : <span></span>}</li>);
  }
}
