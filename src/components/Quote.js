import React from 'react';
import { connect } from 'react-redux';
import writeQuotesToState from '../actions/writeQuotesToState';
import setRandomIndex from '../actions/setRandomIndex';

const twitterURL = 'https://twitter.com/intent/tweet?text=';
const apiURL = 'https://type.fit/api/quotes';

class Quote extends React.Component {
	// Get quote on page load
	componentDidMount() {
		fetch(apiURL)
			.then(response => response.json())
			.then(data => {
				this.props.writeQuotesToState(data);
				this.props.setRandomIndex();
			});
	}

	render() {
		let i = this.props.index;
		let text = this.props.quotes[i].text;
		let author = this.props.quotes[i].author;
		author = author ? author : 'Unknown';
		let tweet = `${text} - ${author}`;

		return (
			<div id="quote-box">
				<div className="terminal-card">
					<header>Random Quote Machine</header>
					<div id="quote">
						<p>"{text}"</p>
						<p id="author">- {author}</p>
						</div>
				</div>

				<div id="buttons">
					<button
						id="new-quote"
						className="btn btn-default"
						onClick={() => { this.props.setRandomIndex() }}
					>
						Get Quote
					</button>

					<a
						id="tweet-quote"
						className="btn btn-primary"
						href={twitterURL + tweet}
						target="_blank"
						rel="noreferrer"
					>
						Tweet
					</a>
				</div>
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
