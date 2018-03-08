import React, { Component } from "react";
import { Link } from "react-router-dom";
import History from "../../History";
import "./header.css";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    debugger
    let loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      this.setState({
        loggedIn: true
      });
    }
  }
  logout() {
    this.setState({
      loggedIn: false
    });
    localStorage.removeItem('user');
    History.push("/");
  }
  render() {
    return (
      <div key={this.state.loggedIn}>
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
              <a className="navbar-brand">INSTAVOTE</a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-user-circle" /> Admin{" "}
                    {/* <span className="caret" /> */}
                  </a>
                  <ul id="g-account-menu" className="dropdown-menu" role="menu">
                    <li>
                      <Link to="/profile">
                        <i className="fa fa-user-secret" /> My Profile
                      </Link>
                    </li>
                  </ul>
                </li>
                {this.state.loggedIn === true ? (
                  <li>
                    <a onClick={this.logout}>
                      <i className="fa fa-sign-out" /> Logout
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
          {/* <!-- /container --> */}
        </div>
        <div className="container-fluid custom-banner">
          {this.state.loggedIn === false ? (
            <div>
              <h1>InstaVote</h1>
              <p>Create custom polls with live results.</p>
            </div>
          ) : (
            <div>
              <h1>Dashboard</h1>
              <p>What would you like to do today?</p>
              <Link to="/newpoll" className="btn btn-lg btn-success">
                New Poll
              </Link>
              <Link to="/polllists" className="btn btn-lg btn-primary">
                My Polls
              </Link>
            </div>
          )}
        </div>
      </div>
      // <!-- /Header -->
    );
  }
}

export default HeaderComponent;
