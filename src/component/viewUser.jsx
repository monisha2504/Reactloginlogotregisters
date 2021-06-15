import React, { Component } from "react";
import UserService from "../services/userService";
class ViewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.userid,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
    };
  }

  componentDidMount() {
    console.log("userId=>" + this.state.userId);
    UserService.viewUser(this.state.userId).then((res) => {
      let user = res.data;
      this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        mobileNumber: user.mobileNumber,
      });
    });
  }
  back() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <div>
        <br></br>

        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View User Details</h3>
          <div className="card bg-info text-dark">
            <div className="card-body">
              <div className="row">
                <label>
                  <b>UserId: </b>
                </label>
                <div>{this.state.userId}</div>
              </div>

              <div className="row">
                <label>
                  <b>FirstName: </b>
                </label>
                <div>{this.state.firstName}</div>
              </div>
              <div className="row">
                <label>
                  <b>LastName: </b>{" "}
                </label>
                <div>{this.state.lastName}</div>
              </div>
              <div className="row">
                <label>
                  <b>Email: </b>
                </label>
                <div>{this.state.email}</div>
              </div>
              <div className="row">
                <label>
                  <b>MobileNumber: </b>
                </label>
                <div>{this.state.mobileNumber}</div>
              </div>
              <button
                className="btn btn-dark"
                onClick={this.back.bind(this)}
                style={{ marginLeft: "20px" }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUser;
