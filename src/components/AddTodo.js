import React, { Component } from 'react';
import axios from 'axios';

class AddTodo extends Component {
    state = {

    }
    render() {
        return (
            <div style={addBox}>
                <form style={formStyle}>
                    <label style={fontStyle}>Title</label>
                    <input style={inputStyle}></input>
                    <label style={fontStyle}>Details</label>
                    <input style={inputStyle}></input>
                    <label style={fontStyle}>Due Date</label>
                    <input style={inputStyle}></input>
                    <input style={buttonStyle} type= "submit" value="Add Todo"></input>
                </form>
            </div>
        )
    }
}
const addBox = {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: "15px",
    marginBottom: "10px",
    width: "80%",
    height: "20%",
    borderRadius: "5px",
    display: "flex",
    float: "left",
    flexDirection: "column",
    textAlign: "left"
}
const fontStyle = {
    font: "Times New Roman, Times, Serif"
}
const inputStyle = {
    backgroundColor: "#f4f4f4",
    borderRadius: "1%"
}
const formStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "5%"
}
const buttonStyle = {
    textAlign: "center",
    padding: "10px",
    marginTop: "10px",
    border: "1px",
    borderRadius: "10px",
    width: "100px",
    font: "Times New Roman, Times, Serif"
}

export default AddTodo;