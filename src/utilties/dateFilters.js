import {
	isToday,
	isThisWeek,
	isThisMonth,
	isTomorrow,
	compareAsc
} from 'date-fns';

export function findTodaysDates(data) {
	return data
		.filter(x => isToday(x.date))
		.sort((a, b) => compareAsc(a.date, b.date));
}
export function findTomorrowsDates(data) {
	return data
		.filter(x => isTomorrow(x.date))
		.sort((a, b) => compareAsc(a.date, b.date));
}

export function findThisWeeks(data) {
	return data
		.filter(x => isThisWeek(x.date))
		.sort((a, b) => compareAsc(a.date, b.date));
}

export function findThisMonths(data) {
	return data
		.filter(x => isThisMonth(x.date))
		.sort((a, b) => compareAsc(a.date, b.date));
}

export function mapDatesInData(data) {
	return data.map(item => {
		let [day, month, year] = item.date.split('-').map(x => +x);
		return {
			...item,
			date: new Date(year, month, day)
		};
	});
}
