import React from 'react'
import ToDo from './Todo'

export default function TodoList({todos, toggleTodo}) {
    return (
        todos.map(todo => {
// must be a unique key so react knows which specific state is changed
            return <ToDo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
        } )
    )
}