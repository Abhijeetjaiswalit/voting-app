import React, { Component } from "react";
import { Link } from "react-router-dom";
class HeaderComponent extends Component {
  render() {
    return (
      <div
        id="top-nav"
        className="navbar navbar-inverse navbar-static-top"
        style={{ background: "#2A3F54" }}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/dashboard" className="navbar-brand">
              Dashboard
            </Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link
                  to="admin"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-user-circle" /> Admin{" "}
                  {/* <span className="caret" /> */}
                </Link>
                <ul id="g-account-menu" className="dropdown-menu" role="menu">
                  <li>
                    <Link to="/profile">
                      <i className="fa fa-user-secret" /> My Profile
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-sign-out" /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /container --> */}
      </div>

      // <!-- /Header -->
    );
  }
}

export default HeaderComponent;
