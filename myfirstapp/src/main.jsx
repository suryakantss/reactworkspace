import React from 'react'
import { createRoot } from 'react-dom/client'

function Greet({msgx,msgy}){
  return (
    <div>
      <h3>{msgx},{msgy}</h3>
    </div>
  )
}

/*
function Greet(props){
  return (
    <div>
      <h3>{props.msgx},{props.msgy}</h3>
    </div>
  )
}
*/
class Login extends React.Component {
  msg = 'Login Page';
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.msg}</h3>
      </div>
    )
  }
}

function Myapp() {
  return (
    <div>
      <h3>Class Components</h3>
      <Greet msgx="Welcome!!!" msgy="Hi There!!"></Greet>
      <Login msg="Happy Learning!!"></Login>
    </div>
  )
}
createRoot(document.getElementById('root')).render(<Myapp />);
