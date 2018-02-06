import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
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

	getLastUpdatedDate(data) {
		const first = data[0];
		return first ? new Date(first.updatedAt) : null;
	}

	render(props, { data }) {
		return (
			<div id="app">
				{/* <Header updatedAt={this.getLastUpdatedDate(data)} /> */}
				<Router onChange={this.handleRoute}>
					<Home path="/" data={data} />
				</Router>
			</div>
		);
	}
}
