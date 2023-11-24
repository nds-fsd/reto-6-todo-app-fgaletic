import React from 'react'
import TodoCard from '../todoCard/todoCard'

const Container = ({ todos }) => {
  return (
    <div style={{ height: '600px', overflow: 'scroll' }}>
      {todos.map((todo) => {
        return (
          <TodoCard key={todo.id} title={todo.title} fecha={todo.fecha} done={todo.done} category={todo.category} />
        )
      })}
    </div>
  )
}

export default Container;