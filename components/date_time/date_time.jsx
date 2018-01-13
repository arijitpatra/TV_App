import React from 'react';
import './date_time.scss';

class DateTime extends React.Component {
	constructor() {
        super();

        var today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
            time = today.toLocaleTimeString();

        this.state = {
            date: date,
            time: time
        };
    }

	render(){
		return(
			<div className="date_time">
				{this.state.date} {this.state.time}
			</div>
		);
	}
}
export default DateTime;