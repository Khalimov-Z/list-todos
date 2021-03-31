import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTodo } from '../redux/todos'
import Button from './Button';
import ReactLoading from 'react-loading';


function Todo (props) {
  const dispatch = useDispatch();
  const todoChecking = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }

  return (
    <div>
      {(props.todo.checking) ? 
          <ReactLoading 
          type='spin' 
          color='blue' 
          height={16} 
          width={16} />
         : 
          <input
            type="checkbox"
            checked={props.todo.completed}
            onChange={() => todoChecking(props.todo.id, props.todo.completed)}
          />
        }
      
      <div>{props.todo.title}</div>
      <div>
        <Button todo={props.todo}/>
      </div>

    </div>
  )
}

export default Todo