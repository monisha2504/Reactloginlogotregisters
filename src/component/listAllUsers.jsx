import React, { Component } from "react";
import UserService from "../services/userService";
import { Link } from "react-router-dom";
import { updateState, logoutAction } from "../action/loginAction";
import { connect } from "react-redux";
import Navbar from "./navbar";

class ListAllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userId: localStorage.getItem("userId"),
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUserByUserId = this.deleteUserByUserId.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
    this.logout = this.logout.bind(this);
  }
  addUser = () => {
    this.props.history.push(`/create-user`);
  };

  viewUser(userId) {
    console.log("userid=>" + userId);
    this.props.history.push(`/view-user/${userId}`);
  }
  updateUser(userId) {
    this.props.history.push(`/update-user/${userId}`);
  }

  deleteUserByUserId(userId) {
    UserService.deleteUserByUserId(userId).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.userId !== userId),
      });
    });
  }
  /**
   * logout method
   */
  logout() {
    console.log("logout=>" + this.state.userId);
    this.props.updateState(false);
    UserService.logout(this.state.userId).then((res) => {
      localStorage.removeItem("userId");
      this.props.history.push(`/home`);
    });
  }

  componentDidMount() {
    console.log("userid=>" + this.props.isLoggedIn);
    if (this.props.isLoggedIn) {
      UserService.getAllUsers().then((res) => {
        console.log("data: ", res.data);
        this.setState({ users: res.data });
      });
    } else {
      alert("Please Login");
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <br></br>

        <div className="container">
          <h2 className="text-center">UsersList</h2>
          <div className="row">
            <button
              style={{ color: "blue" }}
              type="button"
              className="fa fa-plus"
              onClick={this.addUser}
            >
              Add User
            </button>
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
                {this.state.users.map((user) => (
                  <tr key={user.userId}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.mobileNumber}</td>
                    <td>
                      <button
                        style={{ color: "green" }}
                        onClick={() => this.updateUser(user.userId)}
                        className="fa fa-edit"
                      ></button>
                      <button
                        style={{ marginLeft: "10px", color: "red" }}
                        onClick={() => this.deleteUserByUserId(user.userId)}
                        className="fa fa-trash"
                      ></button>
                      <button
                        style={{ marginLeft: "10px", color: "blue" }}
                        onClick={() => this.viewUser(user.userId)}
                        className="fa fa-eye"
                      ></button>
                    </td>
                  </tr>
                ))}
                <Link
                  class="btn btn-lg btn-info"
                  role="button"
                  onClick={this.logout}
                >
                  LOGOUT &raquo;
                </Link>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (mystate) => {
  return {
    isLoggedIn: mystate.isLoggedIn,
  };
};

const mapDispatchToProps = () => {
  return {
    updateState,
    logoutAction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(ListAllUsers);
//export default ListAllUsers;
