import React, { Component } from 'react';
import axios from 'axios';
import Todos from './Todos';
import '../css/ScrollBar.css';

class TodoList extends Component {
    state = {
    }

    render() {
        return  (
            
            <div class="scrollbar" id="style-5">
                <Todos todos={this.props.todos}/>
            </div>
        )
    }
}

export default TodoList;