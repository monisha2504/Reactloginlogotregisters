import React, { Component } from "react";
import UserService from "../services/userService";
import { Link } from "react-router-dom";
import { updateState, logoutAction } from "../action/loginAction";
import { connect } from "react-redux";
import HeaderComponent from "./headercomponent";

class customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: localStorage.getItem("userId"),
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log("logout=>" + this.state.userId);
    this.props.updateState(false);
    UserService.logout(this.state.userId).then((res) => {
      this.props.history.push(`/home`);
    });
  }

  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <h1>Customer Dashboard</h1>
        <p>welcome {this.state.userId}</p>
        <Link class="btn btn-lg btn-info" role="button" onClick={this.logout}>
          LOGOUT &raquo;
        </Link>
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
export default connect(mapStateToProps, mapDispatchToProps())(customer);
