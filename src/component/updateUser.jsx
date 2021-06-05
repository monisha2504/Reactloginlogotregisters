import React, { Component } from 'react';
import UserService from '../services/userService';
class UpdateUser extends Component {
    constructor(props){
        super(props)

        this.state={
            userid:this.props.match.params.userid,
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            mobileNumber:''
        }
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeMobileNumberHandler=this.changeMobileNumberHandler.bind(this);
        this.editUser=this.editUser.bind(this);
    }
    componentDidMount(){
        UserService.viewUser(this.state.userid).then((res) =>{
            let user=res.data;
            this.setState({firstname:user.firstname,lastname:user.lastname,email:user.email,password:user.password, mobileNumber:user.mobileNumber

            });
        });
    }
    editUser= (e) =>{
        e.preventDefault();
        let user ={userid:this.state.userid,firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email,password:this.state.password,mobileNumber:this.state.mobileNumber};
        console.log('user => '+JSON.stringify(user));

        UserService.updateUser(user,this.state.userid).then((res) => {
            this.props.history.push(`/users`);
      });

  }
    changeUserIdHandler =(event) =>{
        this.setState({userid:event.target.value});
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstname:event.target.value});
    }
    changeLastNameHandler =(event) => {
        this.setState({lastname:event.target.value});
    }
    changeEmailHandler =(event) => {
        this.setState({email:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }
    
    changeMobileNumberHandler =(event) => {
        this.setState({mobileNumber:event.target.value});
    }
    cancel(){
        this.props.history.push('/users');
    }
render(){
    return(
        <div>
            <br></br>
        
        <div>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Update User</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>UserId</label>
                                      <input placeholder="UserId" name="userid" className="form-control" value={this.state.userid} onChange={this.changeUserIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>FirstName</label>
                                      <input placeholder="FirstName" name="firstname" className="form-control" value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>LastName</label>
                                      <input placeholder="LastName" name="lastname" className="form-control" value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Email</label>
                                      <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Password</label>
                                      <input placeholder="Password" type ="Password"name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                  </div>
                                 
                                  <div className="form-group">
                                      <label>MobileNumber</label>
                                      <input placeholder="MobileNumber" name="mobileNumber" className="form-control" value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.editUser.bind(this)}>Update</button>
                                  <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
}
 
export default UpdateUser;