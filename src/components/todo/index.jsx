import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import cx from "classnames";

import { toggleCompleteness, deleteTodo } from "../../store/slices/todo";
import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleCompleteness({ id: todo.id }));
  };
  const deleteTodoItem = () => {
    dispatch(deleteTodo(todo.id));
  };
  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    }),
    hidden: { opacity: 0, y: 10 },
  };
  return (
    <motion.li
      className={styles.item}
      onClick={toggleTodoItem}
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>
      <span className={styles.del} onClick={deleteTodoItem}>
        &times;
      </span>
    </motion.li>
  );
};
