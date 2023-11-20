import React from 'react'
import TodoCard from '../todoCard/todoCard'

const Container = ({ todos }) => { // 3 todos 
  return (
      <div>
          {todos.map((todo) => { 
              return (
                <TodoCard key={todo.id} title={todo.tile} fecha={todo.fecha} done={todo.done} category={todo.category} />
                )
            })}
        </div>
  )
}

export default Container