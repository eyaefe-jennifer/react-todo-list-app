import React from 'react'

const TodoList = ({ todos, handleEdit, handleDelete, completeTodo }) => {
  return (
    <div className="todo-list">
      <div className="todoList-containter">
        <ol>
          {todos.map((todoTask) => (
            <li key={todoTask.id}>
              <div className="wrapper-text">
                <div className="text">
                  <input
                    type="checkbox"
                    value="checked"
                    name="checked"
                    readOnly
                    checked={todoTask.completed}
                    onClick={() => completeTodo(todoTask.id)}
                  />

                  <span
                    className={
                      todoTask.completed ? 'todos-row completed' : 'todos-row'
                    }
                  >
                    {todoTask.todo}
                  </span>
                </div>
                <div className="btn">
                  <button
                    onClick={() => handleEdit(todoTask.id)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todoTask.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default TodoList
