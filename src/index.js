import React from 'react';
import { render } from "react-dom";
import { CohortBasic } from "./lib";
import './MainStyle.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            dataSet: [
                {date: "2018-09-25T00:00:00", retention: "100", user: 20100, data: [100,40,30,15,5,5,0]},
                {date: "2018-09-26T00:00:00",retention: "38.0", user: 2100000, data: [100,70,40,10,0,0]},
                {date: "2018-09-27T00:00:00",retention: "20.6", user: 121, data: [100,90,90,10,5]},
                {date: "2018-09-28T00:00:00",retention: "14.2", user: 104, data: [100,20,10,10]},
                {date: "2018-09-29T00:00:00",retention: "6.7", user: 69, data: [100,5,0]},
                {date: "2018-09-30T00:00:00",retention: "6.8", user: 57, data: [100,50]},
                {date: "2018-10-01T00:00:00",retention: "100", user: 23, data: [100]},
            ]
        }

    }
    render() {
        return(
            <div>
                <p className='title'>Cohort React Graph</p>
                <br/>
                <CohortBasic width={1200} data={this.state.dataSet} />
                <div className="center-block"><a href={'https://github.com/sazzadsazib/cohort-react-graph'} className="gitbutton">Check Documentation On Github</a></div>
            </div>
        )
    }
}

render(<App />, document.getElementById("root"));
