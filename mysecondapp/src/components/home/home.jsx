import React from "react";

export class  Home extends React.Component {
   
    state = {count:0};
    change = ()=>{
       this.setState({count:this.state.count+1});
    }
   componentDidMount(){
    console.log('Home Comp Mounted...');
   }
   
   componentDidUpdate(pprops,pstate){
      console.log('pstate :  ' + pstate.count);
        
   }
   componentWillUnmount(){
    console.log('Home Comp UnMounted...')
   }
    render(){
    return (
        <div>
            <h3>Home : {this.state.count}</h3>
            <button onClick={this.change}>Next</button>
        </div>
    )
}
}