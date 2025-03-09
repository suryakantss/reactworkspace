import React from "react";
export default class CounterClass extends React.Component {
    state = {count:0};
    inc = ()=>{
        this.setState({count:this.state.count+1});
    }
    dec = ()=>{
        this.setState({count:this.state.count-1});
    }
    public render(){
        return (
            <div>
                <h3>Class Comp</h3>
            <div>
              <label>Count : {this.state.count} </label>
            </div>
            <div>
              <button onClick={this.inc}>INC</button>
              <button onClick={this.dec}>DEC</button>
            </div>
          </div>
        )
    }
}