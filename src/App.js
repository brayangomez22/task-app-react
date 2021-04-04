import React, { useState } from "react";

function App() {

  const [userName, setUserName] = useState('brayan')
  const [taskItems, setTaskItems] = useState([
    {name: 'Task One', done: false},
    {name: 'Task Two', done: false},
    {name: 'Task Three', done: true},
    {name: 'Task Four', done: false},
  ])

  const taskTableRows = () => {
    return taskItems.map(task => (
      <tr key={task.name}>
        <td>{task.name}</td>
      </tr>
    ))
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>
          {taskTableRows()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
