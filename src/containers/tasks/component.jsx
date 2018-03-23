import React from 'react'
import Task from './../task'

const TasksComponent = ({tasks}) => (
  <ul>
    {tasks.map((task, index) => (
      <Task
        key={index}
        name={task.name}
        id={task.id}
        done={task.done}
      />
    ))}
  </ul>
)

export default TasksComponent
