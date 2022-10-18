import React from "react";
import './clock.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state={date: new Date()};
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    //

    render() {
        const continent=this.props.continent;
        const city=this.props.city;
        const tz=`${continent}/${city}`;

        return(
                <div class='mx'>

                <h1>In {continent}, {city.replace('_', ' ')}</h1>
                <h2> It is {this.state.date.toLocaleString('en-US', {timeZone: tz})}</h2>
                </div>


        )
    }
}

export default Clock;