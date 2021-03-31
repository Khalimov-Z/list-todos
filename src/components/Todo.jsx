import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTodo } from '../redux/todos';
import Button from './Button';
import ReactLoading from 'react-loading';

function Todo(props) {
  const dispatch = useDispatch();
  const todoChecking = (id, completed) => {
    dispatch(checkTodo(id, completed));
  };

  return (
    <div
      className="list-group-item
     list-group-item-action
     align-items-center
     d-flex
     justify-content-sm-between
     list-group-item-secondary
     mb-2 "
    >
      {props.todo.checking ? (
        <ReactLoading type="spin" color="blue" height={16} width={16} />
      ) : (
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => todoChecking(props.todo.id, props.todo.completed)}
        />
      )}

      <div className="flex-grow-1 pl-3 pr-3 text-dark navbar-brand text-truncate">
        {props.todo.title}
      </div>
      <div>
        <Button todo={props.todo} />
      </div>
    </div>
  );
}

export default Todo;
