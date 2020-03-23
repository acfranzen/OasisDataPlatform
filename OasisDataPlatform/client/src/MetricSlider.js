import React, {Component} from "react";
import "./MetricSlider.css";
const checkImg = require("./check.png");

//Takes 5 arguments: title, total, current, goal, showPercents
// title is name of metric
// total is the overall number of students
// current is the number currently reached
// goal is the desired number of kids to reach
// showPercents is false to show explicit values of current/goal/total.
//          it is true to show current percentage/goal percentage.

class MetricSlider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title,
            current: this.props.current,
            goal: this.props.goal,
            total: this.props.total,
            showPercents: this.props.showPercents
        }
    }

    render(){
        return(
            <div className="holder">
                <div className="metric-text">{this.state.title}</div>
                <GoalText
                     current={this.state.current}
                     goal={this.state.goal}
                     total={this.state.total}
                     showPercents={this.state.showPercents}/>

                
                <Bar percentage={this.state.current/this.state.goal*100}/>
                <div className="percentage-text">{(this.state.current/this.state.goal*100).toFixed(0)}%</div>
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

const GoalText = (props) => {
    if(props.showPercents===true) {
        return (<div className="goal-text"> {(props.current/props.total*100).toFixed(0)}%/
        {(props.goal/props.total*100).toFixed(0)}%</div>)
    }
    else {
        return (<div className="goal-text"> {props.current}/ {props.goal}/ {props.total}</div>)
    }
}

export default MetricSlider;