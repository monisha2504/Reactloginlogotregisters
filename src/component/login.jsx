import React, { Component } from "react";
import UserService from "../services/userService";
import { updateState, logoutAction } from "../action/loginAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

document.title = "Login Page";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      userRole: "",
      error: {},
    };

    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeUserRoleHandler = this.changeUserRoleHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    console.log("userRole=>" + this.state.userRole);

    this.props.updateState(true);
    let loginentity = {
      userId: this.state.userId,
      password: this.state.password,
      userRole: this.state.userRole,
    };

    console.log("loginentity => " + JSON.stringify(loginentity));
    UserService.login(loginentity).then((res) => {
      localStorage.setItem("userId", this.state.userId);
      if (this.state.userRole === "Admin") {
        this.props.history.push(`/admin-home`);
      } else {
        this.props.history.push(`/customer`);
      }
    });
  };
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
                  <form>
                    <div className="form-group">
                      <label>
                        <i class="fas fa-user-circle"></i>UserId
                      </label>
                      <input
                        placeholder="UserId"
                        type="text"
                        name="userId"
                        className="form-control"
                        value={this.state.userId}
                        onChange={this.changeUserIdHandler}
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
                        <i class="fad fa-users"></i>UserRole
                      </label>
                      <select
                        defaultValue=""
                        className="form-control"
                        name="userRole"
                        value={this.state.userRole}
                        onChange={this.changeUserRoleHandler}
                      >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="customer">customer</option>
                      </select>
                    </div>
                    <button
                      disabled={!this.state.userRole}
                      className="btn btn-success"
                      onClick={this.saveUser}
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
