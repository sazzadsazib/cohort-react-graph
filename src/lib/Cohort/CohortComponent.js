import React, {Component} from 'react';
import './CohortStyle.css';

const dateOptions = { month: 'short', day: 'numeric' };

class CohortComponent extends Component {

    render() {
        // console.log(this.props.data.length+1);
        return(
            <div className="container" style={{textAlign: 'center', width: this.props.width}}>
                <div className="row">
                    <div className="col-block-th" style={{width: ((this.props.width/this.props.data.length+1)-5)}}>
                        <br/>
                        <br/>
                    </div>
                    {this.props.data.map((item,i)=>
                        <div className="col-block-th" style={{width: ((this.props.width/this.props.data.length+1)-5)}} key={i}>
                            <p className="day-count">{this.props.data.length === 7 ? "DAY" : this.props.data.length === 4 ? "MONTH": "WEEK"} {i+1}</p>
                            <p className="day-percent">{item.retention}%</p>
                        </div>
                    )}
                </div>
                {this.props.data.map((item,i)=>
                    <div className="row" key={i}>
                        <div className="col-block-th" style={{width: ((this.props.width/this.props.data.length+1)-5)}}>
                            <p className="day-count">{item.date ? new Date(item.date).toLocaleDateString('en', dateOptions) : "N/A"}</p>
                            <p className="user-count">{item.user > 1000 ? item.user > 1000000 ? <span>{(item.user/1000000)}M</span>: <span>{(item.user/1000)}K</span> : item.user } New Users</p>
                        </div>
                        {item.data.map((item,i)=>
                            <div className='col-block' key={i} style={{width: ((this.props.width/this.props.data.length+1)-5),background: 'rgba(110, 126, 212, '+(item/100)+')'}}>
                                <p className="data-count">{item}%</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}
export default CohortComponent;
