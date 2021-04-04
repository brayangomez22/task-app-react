import React, { useState } from "react";
import { TaskRow } from './components/TaskRow'
import { TaskBanner } from "./components/TaskBanner";

function App() {

  const [userName, setUserName] = useState('Brayan')
  const [taskItems, setTaskItems] = useState([
    {name: 'Task One', done: false},
    {name: 'Task Two', done: false},
    {name: 'Task Three', done: true},
    {name: 'Task Four', done: false},
  ])

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => ( t.name === task.name ? {...t, done: !t.done} : t )))

  const taskTableRows = () => 
    taskItems.map(task => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ))

  return (
    <div className="container">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <table className="table table-striped table-bordered">
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
