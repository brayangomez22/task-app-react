import React from "react";

export const TaskRow = (props) => {
  const showData = () => {
    const currentName = props.task.name;

    const data = JSON.parse(localStorage.getItem("tasks"));
    for (var i = 0; i < data.length; i++) {
      if (data[i]["name"] === currentName) {
        const taskDelete = data.splice(i, i + 1);
      }
    }

    localStorage.setItem('tasks', JSON.stringify(data))
    window.location.reload()
  };

  return (
    <tr key={props.task.name}>
      <td>{props.task.name}</td>
      <td>
        <input
          type="checkbox"
          checked={props.task.done}
          onChange={() => props.toggleTask(props.task)}
          name="done"
          id="done"
        />
      </td>
      <td>
        <button className="btn btn-danger p-1" onClick={showData}>
          Delete
        </button>
      </td>
    </tr>
  );
};
