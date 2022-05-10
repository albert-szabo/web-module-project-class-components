import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>To Do App</h1>

        <ul>
          <li>Feed the cat</li>
          <li>Take out the trash</li>
          <li>Go for a walk</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>
        
        <button>Clear</button>
      </div>
    )
  }
}
