import React from 'react'
import { createRoot } from 'react-dom/client'

class Greet extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello React!!!</h3>
      </div>
    )
  }
}

class Login extends React.Component {
  msg = 'Login Page';
  render() {
    return (
      <div>
        <h3>{this.msg}</h3>
      </div>
    )
  }
}

function Myapp() {
  return (
    <div>
      <h3>Class Components</h3>
      <Greet></Greet>
      <Login></Login>
    </div>
  )
}
createRoot(document.getElementById('root')).render(<Myapp />);
