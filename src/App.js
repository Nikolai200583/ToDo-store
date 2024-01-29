import './App.css';
import {TodoList } from './components/todo-list';
import { AddTodo } from "./components/add-todo";
import Filters from './components/filters/Filters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <Filters />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
