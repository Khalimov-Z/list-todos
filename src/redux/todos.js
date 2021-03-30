const LOAD_START = 'todos/load/start';
const LOAD_SUCCESS = 'todos/load/success';
const CHECK_START = 'todos/check/start';
const CHECK_SUCCESS = 'todos/check/success';
const REMOVE_START = 'todos/remove/start';
const REMOVE_SUCCESS = 'todos/remove/success';
const initialState = {
  items: [],
  loading: false,
};

export default function reducer(state = initialState, action){
  switch (action.type){
    case LOAD_START:
      return{
        ...state,
        loading: true,
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case CHECK_START:
      return {
        ...state,
        items: state.items.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              checking: true
            }
          }
        })
      }
    case CHECK_SUCCESS:
      return {
        ...state,
        items: state.items.map((todo) => {
          if (todo.id === action.payload) {
            return{
              ...todo,
              completed: !todo.completed,
              checking: false,
            };
          }
          return todo;
        })
      }
    case REMOVE_START:
      return {

      }
    case REMOVE_SUCCESS:
      return {

      }

    default:
      return state;
  }
}
export const loadTodos = () => {
  return (dispatch) => {
    dispatch({
      type:LOAD_START
    });

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LOAD_SUCCESS, payload: json})
      })
  }
}
export const removeTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_START
    });
  }
}
export const checkTodo = (id,completed) => {
  return (dispatch) => {
    dispatch({
      type: CHECK_START,
      payload:id,
    });
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({completed: !completed}),
      headers: {"content-type": "application/json"}
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: CHECK_SUCCESS,
          payload: id
        })
      })
  }
}
