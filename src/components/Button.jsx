import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todos';

function Button(props) {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="button">
      <button
        onClick={() => handleDeleteTodo(props.todo.id)}
        disabled={props.todo.deleting}
      >
        delete
      </button>
    </div>
  );
}

export default Button;
