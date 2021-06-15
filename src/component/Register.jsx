import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/userService";


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
      userRole: "",
      errors:{}
    };

    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
    this.changeUserRoleHandler = this.changeUserRoleHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      login: {
        loggedIn: "false",
        password: this.state.password,
        userId: this.state.userId,
        userRole: this.state.userRole,
      },
      mobileNumber: this.state.mobileNumber,
      password: this.state.password,
      userId: this.state.userId,
      userRole: this.state.userRole,
    };

    console.log("user => " + JSON.stringify(user));

    UserService.createUser(user).then((res) => {
      this.props.history.push(`/login`);
    });
  };
  changeUserIdHandler = (event) => {
    this.setState({ userId: event.target.value });
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeMobileNumberHandler = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };
  changeUserRoleHandler = (event) => {
    this.setState({ userRole: event.target.value });
  };
  cancel() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <br></br>
        <div>
          <div className="container-md">
            <div className="row">
              <div
                className="card col-md-6 offset-md-3 offset-md-3"
                style={{ backgroundColor: "transparent", border: "0" }}
              >
                <h3 className="text-center">User Registration</h3>
                <div className="card-body">
                  <form className="was- npvalidated">
                    <div className="form-row">
                        <div className="col">
                      <label>
                        <i class="fas fa-user-circle"></i> UserId
                      </label>
                      <input
                        placeholder="UserId"
                        name="userId"
                        className="form-control"
                        value={this.state.userId}
                        onChange={this.changeUserIdHandler}
                      />
                    </div>
                   
                    
                        <div className="col">
                      <label>
                        <i class="fas fa-user"></i>FirstName
                      </label>
                      <input
                        placeholder="FirstName"
                        name="firstName"
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.changeFirstNameHandler}
                      />
                    </div>
                  
            
                   
                      <div className="col">
                        <label>
                          <i class="fas fa-user"></i>LastName
                        </label>
                        <input
                          placeholder="LastName"
                          name="lastName"
                          className="form-control"
                          value={this.state.lastName}
                          onChange={this.changeLastNameHandler}
                        />
                      </div>
                      </div>
                      <br/>
                   
                      <div className="form-row">
                        <div className="col">
                      <label>
                        <i class="fas fa-envelope"></i>Email
                      </label>
                      <input
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.changeEmailHandler}
                      />
                    </div>
                    
                    
                        <div className="col">
                      <label>
                        <i class="fas fa-lock"></i>Password
                      </label>
                      <input
                        placeholder="Password"
                        type="Password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.changePasswordHandler}
                      />
                    </div>
                    </div>
                    <br/>

                    <div className="form-row">
                        <div className="col">
                      <label>
                        <i class="fas fa-phone-alt"></i>MobileNumber
                      </label>
                      <input
                        placeholder="MobileNumber"
                        name="mobileNumber"
                        className="form-control"
                        value={this.state.mobileNumber}
                        onChange={this.changeMobileNumberHandler}
                      />
                    </div>
                    
                    
                        <div className="col">
                      <label>
                        <i class="fas fa-phone-alt"></i>UserRole
                      </label>
                      <input
                        placeholder="UserRole"
                        name="userRole"
                        className="form-control"
                        value={this.state.userRole}
                        onChange={this.changeUserRoleHandler}
                      />
                    </div>
                    </div>
                    <br/>
                    <button className="btn btn-success" onClick={this.saveUser}>
                      Register
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                    <div className="mt-2 text-center">
                      <small>
                        Already Registered <Link to="/login">Login</Link>
                      </small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
