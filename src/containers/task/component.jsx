import React from 'react'

const TaskComponent = ({name, id, remove, editing, toggleEdit, save, onChange}) => (
  <li>
    {
      editing
        ? (
          <div>
            <input onChange={onChange} type='text' />
            <button onClick={(id) => save(id)}>save</button>
          </div>
        )
        : (
          <div>
            <span>{name}</span>
            <button onClick={toggleEdit}>edit</button>
          </div>
        )
    }
    <button onClick={() => remove(id)}>delete</button>
  </li>
)

export default TaskComponent
