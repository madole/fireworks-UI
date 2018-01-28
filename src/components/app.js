import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import data from '../../data.json';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile'
// const DATA_URL = 'http://localhost:8000';
const DATA_URL = 'https://fireworks-scraper.herokuapp.com/';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}

	componentDidMount() {
		fetch(DATA_URL)
			.then(res => res.json())
			.then(data => {
				this.setState({
					data
				});
			})
			.catch(err => console.error(err));
	}
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" data={this.state.data} />
				</Router>
			</div>
		);
	}
}
