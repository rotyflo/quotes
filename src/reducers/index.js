const ADD = 'ADD';

export default function messageReducer(state = ['hello world'], action) {
	switch (action.type) {
		case ADD:
			return [...state, action.message];
		default:
			return state;
	}
};