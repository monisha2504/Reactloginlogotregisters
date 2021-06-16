import React, { Component } from "react";
import UserService from "../services/userService";
import { updateState, logoutAction } from "../action/loginAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      userRole: "",
      isLoggedIn: "false",
      errors: {},
    };

    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeUserRoleHandler = this.changeUserRoleHandler.bind(this);
  }
  /**
   * schema to validate
   */
  schema = {
    userId: Joi.string().min(3).alphanum().required(),
    password: Joi.string().min(8).max(15).alphanum().required(),
    userRole: Joi.string().required(),
    isLoggedIn: Joi.string().required(),
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

  handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("userRole=>" + this.state.userRole);
    /**
     * calling validate method
     */
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    let loginentity = {
      userId: this.state.userId,
      password: this.state.password,
      userRole: this.state.userRole,
    };
    console.log("loginentity => " + JSON.stringify(loginentity));

    UserService.login(loginentity).then((res) => {
      if (res === null) {
        this.state.errors.isLoggedIn = "Invalid credentials";
        this.forceUpdate();
      } else {
        localStorage.setItem("userId", this.state.userId);
        this.props.updateState(true);
        if (this.state.userRole === "Admin") {
          this.props.history.push(`/users`);
        } else {
          this.props.history.push(`/customer`);
        }
      }
    });
  };
  /**
   * method for handling input change
   *
   */
  changeUserIdHandler = (event) => {
    this.setState({ userId: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changeUserRoleHandler = (event) => {
    console.log("event=>" + event.target.value);
    this.setState({ userRole: event.target.value });
  };

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
                <h3 className="text-center">Login Page</h3>
                <div className="card-body">
                  <div>
                    <form
                      className="border-rounded p-3 bg-light"
                      onSubmit={this.handleOnSubmit}
                    >
                      {this.state.errors && (
                        <small
                          id="isLoggedIn"
                          className="form-text text-danger"
                        >
                          {this.state.errors.isLoggedIn}
                        </small>
                      )}

                      <div className="form-group">
                        <label for="userId">
                          <i className="fas fa-user-circle"></i>UserId
                        </label>
                        <input
                          placeholder="UserId"
                          id="userId"
                          type="text"
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
                        <label for="password">
                          <i className="fas fa-lock"></i>Password
                        </label>
                        <input
                          placeholder="Password"
                          id="password"
                          type="Password"
                          name="password"
                          className="form-control"
                          value={this.state.password}
                          onChange={this.changePasswordHandler}
                        />
                        {this.state.errors && (
                          <small
                            id="password"
                            className="form-text text-danger"
                          >
                            {this.state.errors.password}
                          </small>
                        )}
                      </div>
                      <div className="form-group">
                        <label for="userRole">
                          <i className="fad fa-users"></i>UserRole
                        </label>
                        <select
                          className="form-control"
                          name="userRole"
                          id="userRole"
                          value={this.state.userRole}
                          onChange={this.changeUserRoleHandler}
                        >
                          <option value="">Select Role</option>
                          <option value="Admin">Admin</option>
                          <option value="customer">customer</option>
                        </select>
                        {this.state.errors && (
                          <small
                            id="userRole"
                            className="form-text text-danger"
                          >
                            {this.state.errors.userRole}
                          </small>
                        )}
                      </div>
                      <button
                        disabled={!this.state.userRole}
                        className="btn btn-success"
                        type="submit"
                      >
                        Login
                      </button>

                      <div className="mt-2 text-center">
                        <small>
                          New user? <Link to="/register">SignUp</Link>
                        </small>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login,
  };
};

const mapDispatchToProps = () => {
  return {
    updateState,
    logoutAction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(Login);
