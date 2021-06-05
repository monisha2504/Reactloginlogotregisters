import React, { Component } from 'react';
import UserService from '../services/userService';
class ListAllUsers extends Component {
  constructor(props){
    super(props)

    this.state={
        users:[]
    }
 
  this.addUser=this.addUser.bind(this);
  this.deleteUserByUserId=this.deleteUserByUserId.bind(this); 
  this.updateUser=this.updateUser.bind(this);
  this.viewUser=this.viewUser.bind(this);
  }
  addUser=()=>{
    this.props.history.push(`/create-user`);
    
}

viewUser(userid){
  this.props.history.push(`/view-user/${userid}`);
}
updateUser(userid){
  this.props.history.push(`/update-user/${userid}`);

}
  deleteUserByUserId(userid){
    UserService.deleteUserByUserId(userid).then(res => {
        this.setState({users: this.state.users.filter(user => user.userid !== userid)});
    });
}
  componentDidMount() {
    UserService.getAllUsers().then((res) => {
      console.log("data: ", res.data);
      this.setState({ users: res.data });
    });
   
  }
 
  
    render() { 
        return ( 
          <div>
            <br></br>
        
            <div>
              <h2 className="text-center">UsersList</h2>
              <div className = "row">
              <button style={{color:"blue"}} type="button" className="fa fa-plus" onClick={this.addUser}>Add User</button>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Email</th>
                      <th>MobileNumber</th>
                      <th>Actions</th>
                      </tr>
  
                  </thead>
           
            <tbody>
              {
              this.state.users.map (
                user =>
                <tr key={user.userid}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNumber}</td>
                  <td>
                    <button style={{color:"green"}}
                     onClick={() =>this.updateUser(user.userid)} className="fa fa-edit">
                    </button>
                  <button style={{marginLeft:"10px",color:"red"}}
                    onClick = { () => this.deleteUserByUserId(user.userid)} className="fa fa-trash">
                  </button>
                  <button style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.viewUser(user.userid)} className="fa fa-eye">
                  </button>
                </td>
                  </tr>
                  
              )
                 }
    </tbody>
    </table>
     </div>
     </div>
     </div>
         );
    }     
}
export default  ListAllUsers;