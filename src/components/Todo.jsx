import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTodo } from '../redux/todos'

function Todo (props) {
  const dispatch = useDispatch();
  const todoChecking = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }

  return (
    <div>
      <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => todoChecking(props.todo.id, props.todo.completed)}
    />
      <div>{props.todo.title}</div>
      <div>
        <button>delete</button>
      </div>

    </div>
  )
}

export default Todo