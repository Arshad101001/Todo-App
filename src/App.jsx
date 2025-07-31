import { useEffect, useRef, useState } from 'react'
import { TodoContextProvider } from './context'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import SearchSort from './components/SearchSort'

function App() {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [searchInput, setSearchInput] = useState("")
  const count = useRef(0)

  const addTodo = (todo) => {
    setTodos((prevTodo) => [...prevTodo, { id: Date.now(), todo: todo, isCompleted: false }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo)))

  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, todo: todo } : prevTodo)))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <TodoContextProvider value={{ addTodo, deleteTodo, updateTodo, toggleCompleted, status, setStatus, searchInput, setSearchInput }} >

        <TodoInput />
        <SearchSort />
        {

          todos.map((todo) => {

            if (todo.todo.includes(searchInput)) {
              return ((status == "finish" && todo.isCompleted) || (status == "pending" && !todo.isCompleted) || (status == "all")) && <TodoItem todo={todo} key={todo.id} />
            }
          })


        }

      </TodoContextProvider>
    </>
  )
}

export default App
