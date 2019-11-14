import React, { Component } from 'react';

export default class Oasis extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:""
        }
        
    }
    
    componentDidMount() {
        fetch('/api')
        .then(response => response.json())
        .then(responseData => this.setState({"data":responseData}))
    }
    
    
    render() {
        if(this.state.data === ""){
            return(<h1>Loading...</h1>)
        } else{
            return (
                <div>
                    <p>Youth Served: {this.state.data.youthServed}</p>
                    <p>% of Male: {this.state.data.PercentMale}%</p>
                    <p>% of Female: {this.state.data.PercentFemale}%</p>

                </div>
            )
        }
    }
}


