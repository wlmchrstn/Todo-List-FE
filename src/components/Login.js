import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
        <div style={registerWrap}>
          <div style={registerBox}>
            <h1 style={titleStyle}>Todo List App</h1>
            <form style={formStyle}>
              <p style={fontStyle}>Username</p>
              <input style={inputStyle} type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}></input>
              <p style={fontStyle}>Password</p>
              <input style={inputStyle} type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onChange}></input>
              <button style={buttonStyle}>Login</button>
            </form>
            <p style={fontStyle}>
              {"Don't have an account? "}
              <a className="a" href="/register">
                {"Sign up!"}
              </a>
            </p>
          </div>
        </div>
    )
  }
}

const registerWrap = {
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
const registerBox = {
  backgroundColor: "rgba(0,0,0,0.1)",
  padding: "30px 20px",
  width: "300px",
  height: "350px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center"
}
const titleStyle = {
  font: "30px Times New Roman, Times, Serif"
}
const fontStyle = {
  font: "Times New Roman, Times, Serif"
}
const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5%",
  margin: "auto",
  textAlign: "center"
}
const inputStyle = {
  padding: "10px",
  margin: "10px",
  width: "200px",
  border: "1px",
  borderRadius: "3%",
  textAlign: "center"
}
const buttonStyle = {
  textAlign: "center",
  padding: "10px",
  margin: "10px",
  border: "1px",
  borderRadius: "10px",
  width: "75px",
  font: "Times New Roman, Times, Serif"
}
export default Login;
