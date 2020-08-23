import React from 'react';
import Demo from './components/Demo';
import Demo1 from './components/Demo1';
import Parent from './components/Parent';
import Sample from './components/Sample';
import TodoList from './components/TodoList'
import logo from './logo.svg';
import './App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash, faPlus, faEdit} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      {/* <h1>App component</h1>
      <Demo></Demo>
      <Demo1></Demo1>
      <Parent></Parent>
      <Sample></Sample> */}
      <TodoList></TodoList>
    </div>
  );
}

export default App;
