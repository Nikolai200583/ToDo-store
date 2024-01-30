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
const pVariants = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1
  },
}
  return (
    <motion.div
    // animate={{rotate: 360}}
    // transition={{
    //   // delay:1,
    //   duration: 1,
    //   repeat: 1,
    //   repeatDelay: 1,
    //   repeatType: "reverse",
    //   type: "just"
    // }}
    >
      <motion.input
        type="text"
        value={value}
        onChange={onInputChange}
        placeholder="Написать задачу"
        initial={'hidden'}
        animate={'visible'}
        transition={{
          delay: 0.5,
          
        }}
        variants={pVariants}
      />
      <motion.button
        disabled={!value}
        className={styles.addButton}
        onClick={handleAddTodo}
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
         
          delay: 0.8
        
        }}
      >
        Добавить задачу
      </motion.button>
    </motion.div>
  );
};
