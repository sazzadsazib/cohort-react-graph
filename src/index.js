import React from 'react';
import { render } from "react-dom";
import { CohortBasic } from "./lib";
import './MainStyle.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            dataSet: [
                {date: "2018-09-25T00:00:00", retention: "100", user: 201, data: [100,20,30,20,0,40,60]},
                {date: "2018-09-26T00:00:00",retention: "38.0", user: 210, data: [100,20,30,20,0,40]},
                {date: "2018-09-27T00:00:00",retention: "20.6", user: 121, data: [100,20,30,20,0]},
                {date: "2018-09-28T00:00:00",retention: "14.2", user: 104, data: [100,20,30,20]},
                {date: "2018-09-29T00:00:00",retention: "6.7", user: 69, data: [100,20,30]},
                {date: "2018-09-30T00:00:00",retention: "6.8", user: 57, data: [100,20]},
                {date: "2018-10-01T00:00:00",retention: "100", user: 23, data: [100]},
            ]
        }

    }
    render() {
        return(
            <div>
                <p className='title'>Cohort React Graph</p>
                <br/>
                <CohortBasic width={1000} data={this.state.dataSet} />
                <div className="center-block"><a href={'https://github.com/sazzadsazib/cohort-react-graph'} className="gitbutton">Check Documentation On Github</a></div>
            </div>
        )
    }
}

render(<App />, document.getElementById("root"));
