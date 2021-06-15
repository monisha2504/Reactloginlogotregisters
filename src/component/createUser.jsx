import React, { Component } from "react";
import UserService from "../services/userService";

class createUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
    };
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  saveUser = (e) => {
    e.preventDefault();
    let user = {
      userId: this.state.userId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      mobileNumber: this.state.mobileNumber,
    };
    console.log("user => " + JSON.stringify(user));
    UserService.createUser(user).then((res) => {
      this.props.history.push(`/users`);
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
  cancel() {
    this.props.history.push("/users");
  }
  render() {
    return (
      <div>
        <br></br>
        <div>
          <div className="container-md">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Add User</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>
                        <i class="fas fa-user-circle"></i>UserId
                      </label>
                      <input
                        placeholder="UserId"
                        name="userId"
                        className="form-control"
                        value={this.state.userId}
                        onChange={this.changeUserIdHandler}
                      />
                    </div>
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <div className="form-group">
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

                    <div className="form-group">
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
                    <button className="btn btn-success" onClick={this.saveUser}>
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
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
export default createUser;
