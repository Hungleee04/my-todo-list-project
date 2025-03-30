import logo from './logo.svg';

import {AddComponent} from "./components/AddComponent";
import {useState} from "react";
import {ListComponent} from "./components/ListComponent";
function App() {
    const [todolist, setTodoList] = useState([])
  return (
    <div className="App">
        <div className="App-header">Todo List</div>
        <AddComponent list={todolist} setList={setTodoList} />

        <ListComponent ds={todolist} setList={setTodoList}/>
    </div>
  );
}

export default App;
