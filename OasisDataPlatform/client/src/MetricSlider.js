import React, {Component} from "react";
import "./MetricSlider.css";
const checkImg = require("./check.png");

//Takes 4 arguments: title, total, current, goal
// title is name of metric
// total is the overall number of students
// current is the number currently reached
// goal is the desired number of kids to reach

class MetricSlider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title,
            current: this.props.current,
            goal: this.props.goal,
            total: this.props.total
        }
    }

    render(){
        return(
            <div className="holder">
                <div className="metric-text">{this.state.title}</div>
                <div className="goal-text"> {(this.state.current/this.state.total*100).toFixed(0)}%/
                    {(this.state.goal/this.state.total*100).toFixed(0)}%</div>
                <Bar percentage={this.state.current/this.state.goal*100}/>
                <CheckBox percentage={this.state.current/this.state.goal*100}/>
            </div>
        )
    }
}
const Bar = (props) => {
    return (
        <div className="bar">
            <Filler percentage={props.percentage}/>
        </div>
    )
}
const Filler = (props) => {
    return <div className="filler" style={{width: `${props.percentage}%`}}/>
}

const CheckBox = (props) => {
    if(props.percentage===100) {
        return (<div className="check">
            <img src={checkImg} className="checkmark" alt="check"/>
        </div>)
    }
    else {
        return <div className="no-check"/>
    }
}

export default MetricSlider;