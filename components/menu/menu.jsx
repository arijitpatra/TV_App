import React from 'react';
import './menu.scss';

class Menu extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			menulist: false
		}
	}

	componentWillMount() {
		fetch('http://ec2-13-127-8-37.ap-south-1.compute.amazonaws.com/mediaservice/entrypoint/v1/mainmenu')
		.then(response => response.json())
		.then(data => {
			this.setState({
				menulist: data.sections[0].items
			});
		});
	}

	render(){

		if (this.state.menulist != false) { 
			// console.log('data from API ' , this.state.menulist[0].displayText);
			return(
				<div className="menu">
					<span className="menu__arrow menu__arrow--left">&larr;</span>
					<ul className="menu__ul">
					{this.state.menulist.map((item, i) => 
						<li className="menu__items">
							<img className="menu__icons" key={i} src={item.imageUrl} alt={item.displayText}/> 
							<span className="menu__items" key={i}>{item.displayText}</span>
						</li>
					)}
	              	{/*this.state.menulist.map((item, i) => <span className="menu__items" key={i}>{item.displayText}</span>)*/}
	              	</ul>
	              	<span className="menu__arrow menu__arrow--right">&rarr;</span>
				</div>
			);
		} else {
			return (
				<div>LOADING</div>

				/*<div className="menu">
					<span className="menu__arrow menu__arrow--left">&larr;</span>
					<ul className="menu__ul">
					<li className="menu__items">CatchUp</li>
					<li className="menu__items">On Demand</li>
					<li className="menu__items menu__items--highlighted">Live TV</li>
					<li className="menu__items">EPG</li>
					<li className="menu__items">Library</li>
					<li className="menu__items">Search</li>
					<li className="menu__items">Settings</li>
					</ul>
					<span className="menu__arrow menu__arrow--right">&rarr;</span>
				</div>*/
			);
		}
	}
}
export default Menu;
