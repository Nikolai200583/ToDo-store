import { useSelector } from "react-redux";
import { selectTodosByFilter } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from './index.module.css';

export const TodoList = () => {
  const todos = useSelector(selectTodosByFilter);
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
