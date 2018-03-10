import React, { Component } from "react";
import History from "../../History";
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

      newArr.map(function (i) {
        mappedArr.push(polldata[i]);
        return 0;
      });
      this.setState({
        pollOptions: mappedArr
      });
    }
  }
  submitVote() {
    let polloptions = this.state.pollOptions;
    let selectedoption = this.state.selectedpoll;
    let pollname = this.state.pollName;
    let PollingData = {
      polloptions, selectedoption, pollname
    }
    localStorage.setItem('PollData', JSON.stringify(PollingData));
    let user = localStorage.getItem('user');
    History.push('/voteresult/' + user);

  }
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

      </div>
    ) : (
        <h1>No poll has been registered yet.Please go ahead and add some.</h1>
      );
  }
}

export default VotingPollContainer;
