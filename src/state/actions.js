import {
	findTodaysDates,
	findTomorrowsDates,
	findThisWeeks,
	findThisMonths,
	mapDatesInData
} from '../utilties/dateFilters';

const DATA_URL = 'https://fireworks-scraper.herokuapp.com/';

const actions = store => ({
	fetchData: async state => {
		store.setState({ loading: true });
		const res = await fetch(DATA_URL);
		if (!res.ok) {
			throw new Error('Cant fetch data');
		}
		const data = await res.json();
		const mappedData = mapDatesInData(data).filter(
			item => item.type !== 'Theatrical/indoor fireworks'
		);

		const firstEvent = mappedData[0];
		return {
			...state,
			fireworks: mappedData,
			filteredFireworks: findTodaysDates(mappedData),
			updatedAt: firstEvent ? new Date(firstEvent.updatedAt) : null,
			loading: false,
			filteredBy: 'Today'
		};
	},
	filterByToday: state => {
		const filteredFireworks = findTodaysDates(state.fireworks);
		return {
			...state,
			filteredFireworks,
			filteredBy: 'Today'
		};
	},
	filterByTomorrow: state => {
		const filteredFireworks = findTomorrowsDates(state.fireworks);
		return {
			...state,
			filteredFireworks,
			filteredBy: 'Tomorrow'
		};
	},
	filterByWeek: state => {
		const filteredFireworks = findThisWeeks(state.fireworks);
		return {
			...state,
			filteredFireworks,
			filteredBy: 'This Week'
		};
	},
	filterByMonth: state => {
		const filteredFireworks = findThisMonths(state.fireworks);
		return {
			...state,
			filteredFireworks,
			filteredBy: 'This Month'
		};
	}
});

export default actions;
