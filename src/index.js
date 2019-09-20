import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/todoList/todoList'
import AppHeader from './components/appHeader/appHeader'
import SearchPanel from './components/searchPanel/searchPanel'




const App = () => {

    const todoData = [
        {
            label: 'Yeah',
            important: false,
            id: 1
        },
        {
            label: 'Yeah2',
            important: true,
            id: 2
        },
        {
            label: 'Yeah3',
            important: false,
            id: 3
        },
    ]
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    )
}


ReactDom.render(<App />, document.getElementById("root"))