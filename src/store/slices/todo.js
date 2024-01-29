import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byIds: {},
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const id = ++nextTodoId;
      state.allIds.push(id);
      state.byIds[id] = {
        content: action.payload,
        completed: false,
      };
    },
   
    toggleCompleteness: (state, action) => {
      const { id } = action.payload;
      const targetTodo = state.byIds[id];
      targetTodo.completed = !targetTodo.completed;
    },

    deleteTodo:  (state, action) => {    
      state.allIds = state.allIds.filter(todo => todo !== action.payload);   
      // Необходимо реализовать отчистку byIds   
                          
    },

  },
});


export const { addTodo, toggleCompleteness, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer; 

