import { h, Component } from "preact";
import { Router } from "preact-router";
import { connect } from "unistore/preact";
import actions from "../state/actions";
import Home from "../routes/home";

class App extends Component {
    componentDidMount() {
        this.props.fetchData();
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
                <Router onChange={this.handleRoute}>
                    <Home path="/" />
                    <Home path="/fireworks-UI/" />
                </Router>
            </div>
        );
    }
}

export default connect("", actions)(App);
