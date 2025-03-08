import React from 'react'
import { createRoot } from 'react-dom/client'

function Greet(){
  return (
    <div>
      <h3>Hello React!!!</h3>
    </div>
  )
}

function Login() {
  let msg='Login Page';

  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

function Myapp(){
  return (
    <div>
    <Greet></Greet>
    <Login></Login>
    </div>
  )
}
createRoot(document.getElementById('root')).render(<Myapp/>);
