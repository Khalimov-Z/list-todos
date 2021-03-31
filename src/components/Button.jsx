import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todos';

function Button(props) {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <button
        className="btn-light pt-0 pb-0 "
        onClick={() => handleDeleteTodo(props.todo.id)}
        disabled={props.todo.deleting}
      >
        DELETE
      </button>
    </div>
  );
}

export default Button;
