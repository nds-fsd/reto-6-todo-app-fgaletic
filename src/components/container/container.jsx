import React from 'react'
import TodoCard from '../todoCard/todoCard'

const Container = ({ todos }) => {
  return (
    <div>
      {todos.slice(0, 3).map((todo) => {
        return (
          <TodoCard key={todo.id} title={todo.title} fecha={todo.fecha} done={todo.done} category={todo.category} />
        )
      })}
    </div>
  )
}

export default Container