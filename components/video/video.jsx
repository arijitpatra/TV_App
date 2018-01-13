import React from 'react';
import './video.scss';
import BrandLogo from '../brand_logo/brand_logo.jsx';
import Overlay from '../overlay/overlay.jsx';

class Video extends React.Component {
	render(){
		return(
			<div className="video">
				<video src="../assets/100.mp4" type="video/mp4" muted autoPlay loop>
				</video>
				<Overlay/>
				<BrandLogo/>
			</div>
		);
	}
}

export default Video;