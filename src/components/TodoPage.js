import React, { Component } from 'react';
import axios from 'axios';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class TodoPage extends Component {
    state = {   
        todos: [
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "2",
                title: "Cuci Piring",
                dueDate: "28-04-2019"
            },
            {
                id: "3",
                title: "Cuci Baju",
                dueDate: "29-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
            {
                id: "1",
                title: "Masak Nasi",
                dueDate: "27-04-2019"
            },
        ]
    }

    render() {
        return (
            <div style={todosWrap}>
                <AddTodo />
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}
const todosWrap = {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex"
}

export default TodoPage;