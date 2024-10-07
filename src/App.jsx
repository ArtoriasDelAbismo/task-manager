import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Read book', 
    'Study',
    'Keep up the grind'
])

function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({ todos: newList }))
}


  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=> {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    console.log(localTodos);
    
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])


  return (
    <>
        <TodoInput handleAddTodos={handleAddTodos} />
        <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
