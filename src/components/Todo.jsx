import React from 'react'
import { useDispatch } from 'react-redux'

function Todo (props) {
  const dispatch = useDispatch();
  const todoChecking = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }

  return (
    <div>
      <div>{props.todo.title}</div>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => todoChecking(props.todo.id)}
      />
      <button>Click</button>
    </div>
  )
}

export default Todo