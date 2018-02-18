import createStore from 'unistore';
import devtools from 'unistore/devtools';

const initialState = {
	fireworks: [],
	filteredFireworks: [],
	updatedAt: new Date(),
	loading: true,
	filteredBy: ''
};

let store =
	process.env.NODE_ENV === 'production'
		? createStore(initialState)
		: devtools(createStore(initialState));

export default store;
