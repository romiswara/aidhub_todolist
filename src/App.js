import logo from './logo.svg';
import './App.css';
import data from './database/data';
import { useState } from 'react'
function App() {
  const [todoList, setTodoList] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : data)
  // const [todoList, setTodoList] = useState(data)
  const [newTask, setNewTask] = useState('')

  const submitTask = () => {
    var current = [...todoList]
    current.push({
      task: newTask
    })
    setTodoList(current)
    // localStorage.setItem("todo", JSON.stringify(todoList))
    saveToStorage(current)
  }

  const deleteTodo = (index) => {

    var currentList = [...todoList]
    currentList.splice(index, 1)
    setTodoList(currentList)
    // localStorage.setItem("todo", JSON.stringify(todoList))
    saveToStorage(currentList)
  }

  const updateTodo = (index) => {
    var listTodo = [...todoList]
    listTodo[index].task = newTask
    setTodoList(listTodo)
    // localStorage.setItem("todo", JSON.stringify(listTodo))
    saveToStorage(listTodo)
  }

  const saveToStorage = (listTodo) => {
    localStorage.setItem("todo", JSON.stringify(listTodo))
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='container__item'>
          <input type="text" value={newTask} onChange={($e) => setNewTask($e.target.value)} />
          <button onClick={submitTask} className='button'>Submit Task</button>
        </div>
      </div>
      <div className='container mt-10'>
        <div className='container__item'>
      
      <ul>
        {todoList && todoList.map((singleData, index) => {
          return <li key={index}>{singleData.task} <button onClick={() => deleteTodo(index)}>delete</button> <button onClick={() => updateTodo(index)}>Update</button></li>
        })}
      </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
