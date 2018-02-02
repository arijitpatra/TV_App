import React from 'react';
import './date_time.scss';

class DateTime extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }


	render(){

        var display_time = this.state.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        var display_date;
        
        //logic for month names
        if (this.state.date.getMonth() == 0) {
            display_date = 'Jan ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 1) {
            display_date = 'Feb ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 2) {
            display_date = 'Mar ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 3) {
            display_date = 'Apr ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 4) {
            display_date = 'May ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 5) {
            display_date = 'Jun ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 6) {
            display_date = 'Jul ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        }  else if (this.state.date.getMonth() == 7) {
            display_date = 'Aug ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 8) {
            display_date = 'Sep ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 9) {
            display_date = 'Oct ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 10) {
            display_date = 'Nov ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } else if (this.state.date.getMonth() == 11) {
            display_date = 'Dec ' + this.state.date.getDate() + ', ' + this.state.date.getFullYear()
        } 

		return(
			<div className="date_time">
				<b>{display_time}</b>
                <span> </span> 
                <i>{display_date}</i>
			</div>
		);
	}
}
export default DateTime;
