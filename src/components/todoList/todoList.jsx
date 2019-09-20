
import React from 'react'
import TodoListItem from '../todoListItem/todoListItem'
import './todo-list.css';


const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        const { id, ...item2 } = item
        return (<li key={item.id} className="list-group-item"><TodoListItem {...item2} /></li>)
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default TodoList;