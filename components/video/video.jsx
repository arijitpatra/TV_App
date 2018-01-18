import React from 'react';
import './video.scss';
import BrandLogo from '../brand_logo/brand_logo.jsx';
import Overlay from '../overlay/overlay.jsx';
import DateTime from '../date_time/date_time.jsx';
import Menu from '../Menu/menu.jsx';

class Video extends React.Component {

	componentDidMount() {
		//configuring support for HLS 
		if(Hls.isSupported()) {
		    var video = document.getElementById('hls-video');
		    var hls = new Hls();
		    hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
		    hls.attachMedia(video);
		    hls.on(Hls.Events.MANIFEST_PARSED,function() {
		      video.play();
		    });
		}
		// hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
		// When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
		// This is using the built-in support of the plain video element, without using hls.js.
		else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		    video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
		    video.addEventListener('canplay',function() {
		      video.play();
		    });
		}
	}

	render(){

		{/*const video_source = "http://media.w3.org/2010/05/bunny/movie.mp4";*/}

		const playerResolutions = {
			height: 1080,
			width: 1920
		}

		return(
			<div className="video">
				{/*<video src="../assets/100.mp4" type="video/mp4" muted autoPlay loop>*/}
				{/*<video src={video_source} type="video/mp4" height="1080" width="1920" autoPlay loop>*/}
				<video id="hls-video" style={playerResolutions} muted autoPlay loop>
					{/*FALLBACK*/}
					<p>No support for HTML5 video tag in the browser!</p>
				</video>
				<Overlay/>
				<BrandLogo/>
				<DateTime/>
				<Menu/>
			</div>
		);
	}
}

export default Video;