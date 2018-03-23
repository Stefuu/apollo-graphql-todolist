import React from 'react'

const TaskComponent = ({name, id, remove, editing, toggleEdit, save}) => (
  <li>
    <div>
      <span>{name}</span>
      {
        editing
          ? (<button onClick={(id) => save(id)}>save</button>)
          : (<button onClick={toggleEdit}>edit</button>)
      }

    </div>
    <button onClick={() => remove(id)}>delete</button>
  </li>
)

export default TaskComponent
