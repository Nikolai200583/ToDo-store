import './App.css';
import {TodoList } from './components/todo-list';
import { AddTodo } from "./components/add-todo";
import Filters from './components/filters/Filters';
import {Collapsible} from './components/Collapsible';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <Filters />
        <TodoList />  
        <Collapsible title={'Toggle content'}>
        sdsdsdfsdfdsdfffffffsd dfsdfsdfadfsadf  dfsdfsa   fsfsdfsdffdfsa dfs d
      </Collapsible>      
      </header>
     
    </div>
  );
}

export default App;
