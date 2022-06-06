import React from 'react'

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>todo list App</h3>
        <input
          className="inputTxt"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="add-button">
          {editId ? 'Edit' : 'Add'}
        </button>
      </form>
    </div>
  )
}

export default TodoForm
