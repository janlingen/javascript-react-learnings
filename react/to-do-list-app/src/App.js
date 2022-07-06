// react manages states inside the app (virtual dom)
// new render whenever something is changed
import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const toDoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
     setTodos(storedTodos);
    }
  }, []);

  function toggleTodo(id){
    const newToDos = [...todos]
    const toDo = newToDos.find(todo => todo.id === id)
    toDo.complete = !toDo.complete
    setTodos(newToDos)
  }

  function handleAddTodo(){
    const name = toDoNameRef.current.value
    if (name === ''){ 
      return 
    }
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]})
    toDoNameRef.current.value = null
  }

  function handleClearTodo(){
    const newToDos = todos.filter(todo => !todo.complete)
    setTodos(newToDos)
  }

  // can only return one fragment
  return (
<>
    {/* JSX (Javascript Syntax Extension), reacts kind of HMTL */}
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={toDoNameRef} type="text" />
    <button onClick={handleAddTodo}> Add ToDo</button>
    <button onClick={handleClearTodo}> Clear Completed ToDo's</button>
    <div>{todos.filter(todo => !todo.complete).length} left ToDo's</div>
    </>
  )
}

export default App;
