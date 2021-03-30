import React, { useEffect } from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "../redux/todos";

function Todos(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.items);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div>
      {loading
        ? "идет загрузка..."
        : todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
    </div>
  );
}

export default Todos;