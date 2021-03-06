import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <a className="navbar-brand">LoginLogoutRegister</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
              </ul>
              <form className="form-inline my-3 my-lg-3">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/login">
                      <b>Sign In</b>
                      <span className="sr-only">(current)</span>
                    </a>{" "}
                  </li>
                </ul>
              </form>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
