import React, { Component } from "react";
import PollOptions from "../../components/polloptions/polloptions.component";
import History from "../../History";
// import { Link } from "react-router-dom";
class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: []
    };

    this.add = this.add.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  add() {
    const options = this.state.options.concat(PollOptions);
    this.setState({ options });
  }
  submitHandler() {
    localStorage.setItem("polldata", JSON.stringify(this.state));
    History.push("polllists");
  }
  changeHandler(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log("value polls", this.state);
  }
  render() {
    const options = this.state.options.map((Element, index) => {
      return (
        <Element key={index} index={index} onChange={this.changeHandler} />
      );
    });

    return (
      <div className="col-lg-4" style={{ textAlign: "center",marginLeft: '450px' }}>
        <h2>New Poll</h2>
        <div className="form-group">
          <label htmlFor="name">Name your poll.</label>
          <input
            className="form-control"
            type="text"
            name="pollname"
            onChange={this.changeHandler}
          />
          <div className="form-group">
            <label>Options</label>
            <input
              className="form-control"
              type="text"
              name="option1"
              onChange={this.changeHandler}
            />
            <input
              className="form-control"
              type="text"
              name="option2"
              onChange={this.changeHandler}
            />
            {options}
          </div>
          <button type="button" className="btn btn-default" onClick={this.add}>
            Add Options
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.submitHandler}
          >
            Submit
          </button>
          {/* <div className="inputs" style={{}}>
            {options}
          </div> */}
        </div>
      </div>
    );
  }
}

export default HomeContainer;
