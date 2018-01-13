import React, {Component} from 'react';

// export default class App extends Component {
//     render () {
//         return <p>This is my website</p>
//     }
// }

// import Header from './header/header.jsx';
// import Body from './body/body.jsx';
// import Footer from './footer/footer.jsx';
import Video from './video/video.jsx';

export default class App extends React.Component{
	render(){
		return(
			<div>
				<Video/>
			</div>
		);
	}
}


