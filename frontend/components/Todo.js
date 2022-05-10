import React from 'react';

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.handleToggle(this.props.task.id);
  }

  render() {
    return (<li onClick={this.handleClick}>{this.props.task.name} {this.props.task.completed ? <span>-completed</span> : <span></span>}</li>);
  }
}
