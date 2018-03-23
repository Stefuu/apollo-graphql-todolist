import React from 'react'
import Task from './../task'

const TaskComponent = ({tasks}) => (
  <ul>
    {tasks.map((task, index) => (
      <Task
        key={index}
        name={task.name}
        id={task.id}
      />
    ))}
  </ul>
)

export default TaskComponent
