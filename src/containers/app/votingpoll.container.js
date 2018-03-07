import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class VotingPollContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      pollOptions: []
    };
    this.submitVote = this.submitVote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const polldata = JSON.parse(localStorage.getItem("polldata"));
    if (polldata) {
      const pollName = Object.assign({}, polldata);
      this.setState({
        pollName: pollName.pollname
      });
      delete polldata.options;
      delete polldata.pollname;
      let newArr = Object.keys(polldata);
      let mappedArr = [];

      newArr.map(function(i) {
        mappedArr.push(polldata[i]);
        return 0;
      });
      this.setState({
        pollOptions: mappedArr
      });
    }
  }
  submitVote() {}
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const options = this.state.pollOptions.map((item, index) => {
      return (
        <div key={index}>
          <input
            type="radio"
            name="voteoptions"
            value={item}
            className="form-control"
            onChange={this.handleChange}
          />
          <label>{item}</label>
        </div>
      );
    });
    console.log(this.state.pollOptions)
    const data = {
      labels: this.state.pollOptions,
      datasets: [
        {
          label: this.state.pollName,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [1, 0]
        }
      ]
    };
    return (
      this.state.pollOptions.length > 0 ?
      <div>
        <div className="col-lg-4">
          <h1>{this.state.pollName}?</h1>
          <p>by rahul</p>
          <div className="col-lg-4">
            <ul className="list-group">
              <li className="list-group-item">{options}</li>
            </ul>
            <button
              type="submit"
              onClick={this.submitVote}
              className="btn btn-primary"
            >
              Vote
            </button>
          </div>
        </div>
        <div>
          <Bar
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
      :
      <h1>No poll has been registered yet.Please go ahead and add some.</h1>
    );
  }
}

export default VotingPollContainer;
