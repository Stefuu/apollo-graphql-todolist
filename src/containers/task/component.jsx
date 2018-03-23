import React from 'react'

const TaskComponent = ({name, id, remove}) => (
  <li>
    <div><span>{name}</span></div>
    <button onClick={() => remove(id)}>delete</button>
  </li>
)

export default TaskComponent
