import React from 'react';

function Todo(props) {
  return (
    <div>{props.todo.title}</div>
  );
}

export default Todo;