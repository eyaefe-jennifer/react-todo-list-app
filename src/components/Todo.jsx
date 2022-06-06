import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
  const [todo, setTodo] = useState('') /**/
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editId) {
      const editTodo = todos.find((edit) => edit.id === editId)
      const updateTodo = todos.map((todoTask) =>
        todoTask.id === editTodo.id
          ? (todoTask = { id: todoTask.id, todo })
          : { id: todoTask.id, todo: todoTask.todo },
      )
      setTodos(updateTodo)
      setEditId(0)
      setTodo('')
      return
    }
    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo('')
    }
  }

  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updateTodo)
  }

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((dele) => dele.id !== id)
    setTodos([...deleteTodo])
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((edit) => edit.id === id)
    setTodo(editTodo.todo)
    setEditId(id)
  }

  return (
    <div className="todo-container">
      <TodoForm
        handleSubmit={handleSubmit}
        todo={todo}
        editId={editId}
        setTodo={setTodo}
      />
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        completeTodo={completeTodo}
      />
    </div>
  )
}

export default Todo
