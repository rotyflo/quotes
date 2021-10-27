const WRITE_QUOTES_TO_STATE = 'WRITE_QUOTES_TO_STATE';
const SET_RANDOM_INDEX = 'SET_RANDOM_INDEX';

const defaultState = {
	quotes: [{text: 'loading...', author: ''}],
	index: 0
}

export default function quoteReducer(state = defaultState, action) {
	switch (action.type) {
		case WRITE_QUOTES_TO_STATE:
			return Object.assign({}, state, {quotes: action.quotes});

		case SET_RANDOM_INDEX:
			let maxIndex = state.quotes.length;
			let randIndex = Math.round(Math.random() * maxIndex);
			return Object.assign({}, state, {index: randIndex});
		
		default:
			return state;
	}
};