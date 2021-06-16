import React, { Component } from "react";
import UserService from "../services/userService";
import Joi from "joi-browser";

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
      userRole: "",
    };
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
    this.changeUserRoleHandler = this.changeUserRoleHandler.bind(this);
  }
  /**
   * schema to validate
   */
  schema = {
    userId: Joi.string().min(4).alphanum().required(),
    firstName: Joi.string().min(2).max(10).required(),
    lastName: Joi.string().min(1).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(15).alphanum().required(),
    mobileNumber: Joi.string().min(10).max(10).required(),
    userRole: Joi.string().required(),
  };
  /**
   * form validation
   *
   */
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state, this.schema, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (result.error !== null) {
      for (let err of result.error.details) {
        errors[err.path[0]] = err.message;
      }
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };
  /**
   *
   * method for handling form submit
   */
  handleOnSubmit = (e) => {
    e.preventDefault();
    /**
     * calling validate method
     */
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(errors);
    if (errors) return;
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
      this.props.history.push(`/users`);
    });
  };
  /**
   * method for handling input change
   *
   */
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
                  <form
                    className=" border-rounded p-3 bg-light"
                    onSubmit={this.handleOnSubmit}
                  >
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
                      {this.state.errors && (
                        <small id="userId" className="form-text text-danger">
                          {this.state.errors.userId}
                        </small>
                      )}
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
                      {this.state.errors && (
                        <small id="firstName" className="form-text text-danger">
                          {this.state.errors.firstName}
                        </small>
                      )}
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
                      {this.state.errors && (
                        <small id="lastName" className="form-text text-danger">
                          {this.state.errors.lastName}
                        </small>
                      )}
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
                      {this.state.errors && (
                        <small id="email" className="form-text text-danger">
                          {this.state.errors.email}
                        </small>
                      )}
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
                      {this.state.errors && (
                        <small id="password" className="form-text text-danger">
                          {this.state.errors.password}
                        </small>
                      )}
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
                      {this.state.errors && (
                        <small
                          id="mobileNumber"
                          className="form-text text-danger"
                        >
                          {this.state.errors.mobileNumber}
                        </small>
                      )}
                    </div>
                    <div className="form-group">
                      <label for="userRole">
                        <i class="fas fa-phone-alt"></i>UserRole
                      </label>
                      <input
                        placeholder="UserRole"
                        name="userRole"
                        id="userRole"
                        className="form-control"
                        value={this.state.userRole}
                        onChange={this.changeUserRoleHandler}
                      />
                      {this.state.errors && (
                        <small id="userRole" className="form-text text-danger">
                          {this.state.errors.userRole}
                        </small>
                      )}
                    </div>
                    <button className="btn btn-success" type="submit">
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
