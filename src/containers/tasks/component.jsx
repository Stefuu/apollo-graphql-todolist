import React from 'react'

const TaskComponent = ({tasks}) => (
  <ul>
    {tasks.map((task, index) => (
      <li key={index}>{task.name}</li>
    ))}
  </ul>
)

export default TaskComponent
