import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class VotingPollContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      pollOptions: [],
      selectedpoll: ""
    };
    this.submitVote = this.submitVote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // let user = localStorage.getItem("user");
    // if (user) {
    //   History.push("/");
    // }
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

    this.setState({
      selectedpoll: value
    });
  }
  render() {
    const options = this.state.pollOptions.map((item, index) => {
      return (
        <div className="radio" key={index}>
          <label htmlFor={item} style={{ fontSize: "26px" }}>
            <input
              type="radio"
              name="voteoptions"
              value={item}
              className="form-control"
              style={{ width: "4%" }}
              onChange={this.handleChange}
            />
            {item}
          </label>
        </div>
      );
    });
    console.log(this.state.pollOptions);
    let dataSets = [];
    if (this.state.pollOptions.length > 0) {
      for (let i = 0; i < this.state.pollOptions.length; i++) {
        if (this.state.selectedpoll === this.state.pollOptions[i]) {
          dataSets.push(1);
        } else {
          dataSets.push(0);
        }
      }
    }
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
          data: dataSets
        }
      ]
    };
    return this.state.pollOptions.length > 0 ? (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <div className="form-group">
              <label
                className="col-md-4 control-label"
                htmlFor="radios"
                style={{ fontSize: "27px" }}
              >
                {this.state.pollName}
              </label>
              <div className="col-md-4">{options}</div>
            </div>
            <div>
              <button
                type="submit"
                onClick={this.submitVote}
                className="btn btn-primary"
                style={{ marginLeft: "460px" }}
              >
                Vote
              </button>
            </div>
          </fieldset>
        </form>
        {this.state.selectedpoll ? (
          <div>
            <Bar
              data={data}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true
              }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    ) : (
      <h1>No poll has been registered yet.Please go ahead and add some.</h1>
    );
  }
}

export default VotingPollContainer;
