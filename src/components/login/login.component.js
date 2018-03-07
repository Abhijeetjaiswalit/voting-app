import React, { Component } from "react";
import History from "../../History";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
    this.loginUser = this.loginUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  loginUser() {
    if (this.state.password && this.state.email) {
      History.push("/newpoll");
      localStorage.setItem("user", this.state.email);
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
            <form>
              <fieldset>
                <h2>Please Sign In</h2>
                <hr className="colorgraph" />
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control input-lg"
                    onChange={this.handleInputChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control input-lg"
                    onChange={this.handleInputChange}
                    placeholder="Password"
                    required
                  />
                </div>
                {/* <span className="button-checkbox">
                            <button type="button" className="btn" data-color="info">Remember Me</button>
                            <input type="checkbox" name="remember_me" id="remember_me" defaultChecked="true" className="hidden" />
                            <a href="" className="btn btn-link pull-right">Forgot Password?</a>
                        </span> */}
                <hr className="colorgraph" />
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                    <button
                      type="submit"
                      onClick={this.loginUser}
                      className="btn btn-lg btn-success btn-block"
                      style={{ marginLeft: "140px" }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
