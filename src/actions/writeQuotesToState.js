const WRITE_QUOTES_TO_STATE = 'WRITE_QUOTES_TO_STATE';

export default function completeFetch(data) {
	return {
		type: WRITE_QUOTES_TO_STATE,
		quotes: data
	};
};