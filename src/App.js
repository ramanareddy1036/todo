import React from 'react';
import logo from './logo.svg';
import './App.css';
import Addtodo from './components/addtodo';
import TodoList from './components/TodoList';
import VisibilityTodo from './components/visibilityFilter';
import ShowButtons from './components/ShowButtons';

function App() {
  return (
    <div className="App">
    <Addtodo/>
    <VisibilityTodo/>
    <ShowButtons />
    </div>
  );
}

export default App;
