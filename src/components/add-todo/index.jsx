import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todo";

import styles from "./index.module.css";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };
  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <motion.div 
    animate={{rotate: 360}}
    transition={{
      // delay:1,
      duration: 1,
      repeat: 1,
      repeatDelay: 1,
      repeatType: "reverse",
      type: "just"
      }}>
      <input type="text" value={value} onChange={onInputChange} placeholder="Написать задачу"/>
      <button disabled={!value} className={styles.addButton} onClick={handleAddTodo}>
       Добавить задачу
      </button>
    </motion.div>
  );
};