import { createSelector } from '@reduxjs/toolkit';
const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store)?.allIds || [];

export const todoByIdSelector = (store, id) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }
  
  const todoItem = todoStore.byIds[id];

  return {
    ...todoItem,
    id,
  };
}

export const selectAllTodos = (store) =>
  todoIdsSelector(store).map((id) => todoByIdSelector(store, id));
export const selectActiveFilter = state => state.filters;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === 'all') return allTodos;    
    if (activeFilter === 'completed') {
      return allTodos.filter(todo => todo.completed);
    }
    return allTodos.filter(todo => !todo.completed);
  },
);