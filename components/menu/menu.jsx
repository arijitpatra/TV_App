import React from 'react';
import './menu.scss';

class Menu extends React.Component {
	render(){
		return(
			<div className="menu">
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
			</div>
		);
	}
}
export default Menu;