import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  state = this.state
  onSubmit = (state) => {
    state.preventDefault();
    axios.post('https://basic-todoapi.herokuapp.com/api/user/create', {
      username: state.username,
      email: state.email,
      password: state.password
    })
    .then(res => {
      alert('Success Register!')
    })
    .catch(err => {
      alert('Failed Register!')
    })
  }

  render() {
    return (
        <div style={registerWrap}>
          <div style={registerBox}>
            <h1 style={titleStyle}>Create A New Account</h1>
            <form style={formStyle} onSubmit={this.onSubmit}>
              <label style={fontStyle}>Username</label>
              <input style={inputStyle} type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}></input>
              <label style={fontStyle}>Email</label>
              <input style={inputStyle} type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.onChange}></input>
              <label style={fontStyle}>Password</label>
              <input style={inputStyle} type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onChange}></input>
              <input style={buttonStyle} type="submit" value="Sign Up"></input>
            </form>
            <p style={signInStyle}>
              {"Already have an account? "}
              <a className="a" href="/">
                {"Sign in!"}
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
  height: "400px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center"
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
const titleStyle = {
  marginBottom: "10px",
  font: "25px Times New Roman, Times, Serif"
}
const fontStyle = {
  font: "Times New Roman, Times, Serif"
}
const inputStyle = {
  padding: "10px",
  margin: "10px",
  widht: "200px",
  border: "10px",
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
const signInStyle = {
  font: "Times New Roman, Times, Serif"
}
export default Register;
