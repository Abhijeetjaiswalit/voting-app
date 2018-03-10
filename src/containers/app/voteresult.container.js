import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class ResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PollOptions: [],
            selectedpoll: "",
            PollName:""
        };
    }
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('PollData'));
        if (data) {
            this.setState({
                PollOptions: data.polloptions,
                selectedpoll: data.selectedoption,
                PollName : data.pollname
            })
        }
    }
    render() {
        let dataSets = [];
        if (this.state.PollOptions) {
            for (let i = 0; i < this.state.PollOptions.length; i++) {
                if (this.state.selectedpoll === this.state.PollOptions[i]) {
                    dataSets.push(1);
                } else {
                    dataSets.push(0);
                }
            }
        }
        const data = {
            labels: this.state.PollOptions,
            datasets: [
                {
                    label: this.state.PollName,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: dataSets
                }
            ]
        };
        return (
            <div>
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
        );
    }
}

export default ResultContainer;
