import React from 'react';
import './brand_logo.scss';

class BrandLogo extends React.Component {
	render(){
		return(
			<div className="brand_logo">
				<img src="../assets/logo.png" className="brand_logo--width" alt="Rainbow_Logo"/>
			</div>
		);
	}
}
export default BrandLogo;