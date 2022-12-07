import { React } from 'react';
import { Input, Output } from './Input';
import Working from './Working';
import './App.css';

function App() {
  return (
    <div className='todo-list'>
      <div className='todo-head'>
        <span className='todo-title'>My Todo List</span>
      </div>
      <Input></Input>
    </div>
  );
}

export default App;
