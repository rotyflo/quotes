const ADD = 'ADD';

export default function addMessage(message) {
	return {
		type: ADD,
		message
	}
};