import React from 'react';
import './date_time.scss';

class DateTime extends React.Component {
	constructor() {
        super();

        var today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
            time = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

        if(today.getMonth() == 0){
        	date = 'Jan ' + today.getDate() + ', ' + today.getFullYear();
        }

        this.state = {
            date: date,
            time: time
        };
    }

	render(){
		return(
			<div className="date_time">
				<b>{this.state.time}</b>
				<span> </span>
				<i>{this.state.date}</i>
			</div>
		);
	}
}
export default DateTime;