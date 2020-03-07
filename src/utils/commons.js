import moment from 'moment';

export const sortByDate = (list, field) =>
	list.sort((a, b) => new Date(moment(a[field], 'DD/MM/YYYY').unix()) - new Date(moment(b[field], 'DD/MM/YYYY').unix()));
