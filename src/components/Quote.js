import React from 'react';
import { connect } from 'react-redux';
import writeQuotesToState from '../actions/writeQuotesToState';
import setRandomIndex from '../actions/setRandomIndex';

class Quote extends React.Component {
	// Get quote on page load
	componentDidMount() {
		fetch('https://type.fit/api/quotes')
			.then(response => response.json())
			.then(data => {
				this.props.writeQuotesToState(data);
				this.props.setRandomIndex();
			});
	}

	sendTweet(tweet) {
		window.open(`https://twitter.com/intent/tweet?text=${tweet}`);
	}

	render() {
		let i = this.props.index;
		let text = this.props.quotes[i].text;
		let author = this.props.quotes[i].author;
		let tweet = `${text} - ${author}`;

		return (
			<div>
				<p id="quote"><em>"{text}"</em></p>
				<p id="author">- {author}</p>
				<button onClick={() => { this.props.setRandomIndex() }} className="btn btn-default">Get Quote</button>
				<button onClick={() => { this.sendTweet(tweet) }} className="btn btn-primary">Tweet</button>
			</div>
		);
	}
}

// connect to store
function mapStateToProps(state) {
	return {
		quotes: state.quotes,
		index: state.index
	}
}

function mapDispatchToProps(dispatch) {
	return {
		writeQuotesToState: (data) => {
			dispatch(writeQuotesToState(data));
		},
		setRandomIndex: () => {
			dispatch(setRandomIndex());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
