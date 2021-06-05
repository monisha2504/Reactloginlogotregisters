import React, { Component } from 'react';
import Hoc from './Hoc'
class One extends Component {
    state = {count:0,name:"sha",color:"blue",isshown:false }
    myClick(){
        this.setState({
            count:this.state.count+1
        } )
        this.setState({
            color:"orange"
        })
        this.setState({
            isshown:true
        })
    }
    render() { 
        const {name}=this.state;
        const {channel}=this.props;
        
        return ( 
            <div>
            <p style={{color:this.state.color}}>Hi Iam Moni{name} {channel}</p>
            <h1>{this.state.isshown ? "Hello Welcome": "Error"}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.myClick()}>Click</button>
            <h2>{this.props.Surname}</h2>
            </div>
         );
    }
}
/*function One(props){
    return(
        <p>{props.name}</p>
    )

}*/
 
export default Hoc(One);
