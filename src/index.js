import './style';
import App from './components/App';
import { Provider } from 'unistore/preact';
import store from './state/store';

/* eslint-disable react/display-name */
export default () => (
	<Provider store={store}>
		<App />
	</Provider>
);
