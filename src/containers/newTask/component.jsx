import React from 'react'

const TaskComponent = ({onChange, save, name}) => (
  <div>
    <input type='text' value={name} onChange={onChange} />
    <button onClick={save}>save</button>
  </div>
)

export default TaskComponent
