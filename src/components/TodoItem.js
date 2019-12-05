import React, { Component } from 'react';
import editIcon from '../editBtn.png'
class TodoItem extends Component {

    render () {
        return (
        <section style={todoStyle}>
            <button style={delStyle}>x</button>
            <button style={editStyle}></button>
            <label style= {dateStyle}>{this.props.todo.dueDate}</label>
            <p style={pStyle}>{this.props.todo.title}</p>
            
        </section>
        )
    }
}
const todoStyle = {
    backgroundColor: "rgba(52,152,219,0.5)",
    border: "1px #ccc solid",
    margin: "4px",
    padding: "5px"
}
const pStyle = {
    font: "Times New Roman, Times, Serif"
}
const delStyle = {
    float: "right",
    backgroundColor: "rgb(162,64,64)",
    color: "#fff",
    border: "none",
    width: "23px",
    height: "23px",
    borderRadius: "50%",
    cursor: "pointer"
}
const editStyle = {
    float: "right",
    border: "none",
    width: "23px",
    height: "23px",
    borderRadius: "50%",
    cursor: "pointer",
    marginRight: "7px",
    backgroundColor: "rgb(102,102,102)",
    backgroundImage: `url(${editIcon})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    position: "relative"
}
const dateStyle = {
    float: "right",
    border: "none",
    marginRight: "7px",
    padding: "2px",
    width: "95px",
    height: "23px",
    borderRadius: "5px",
    backgroundColor: "rgba(189,236,182,0.85)",
    textAlign: "center"
}

export default TodoItem;