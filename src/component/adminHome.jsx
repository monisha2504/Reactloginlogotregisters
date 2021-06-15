import React, { Component } from "react";
import Navbar from "./navbar";
class AdminHome extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <img
            src="https://www.techrepublic.com/a/hub/i/r/2019/02/14/4f571ee4-f9de-4f80-8028-e9981ca7c1b0/resize/1200x/7e814383fc5f43db8033047fc9f57c1e/istock-901609212datasecurity.jpg"
            width="100%"
            height="500px"
            alt="crop"
          />
        </div>
      </div>
    );
  }
}

export default AdminHome;
