import React from "react";
import getQuoteIndex from "../functions/getQuoteIndex";
import sendTweet from "../functions/sendTweet";

export default class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listOfQuotes: {},
			quote: "",
			author: ""
		}
		
		this.getRandomQuote = this.getRandomQuote.bind(this);
	}

	// Get quote on page load
	componentDidMount() {
		this.fetchQuotes();
	}

	fetchQuotes() {
		this.loading();

		fetch("https://type.fit/api/quotes")
			.then(response => response.json())
			.then(data => {
				this.setState({
					listOfQuotes: data
				});
				this.getRandomQuote();
			});
	};

	getRandomQuote() {
		let i = getQuoteIndex(this.state.listOfQuotes.length);
		let chosenQuote = this.state.listOfQuotes[i];
		
		this.setState((state) => ({
			quote: `"${chosenQuote.text}"`,
			author: `- ${chosenQuote.author}`
		}));
	}

	loading() {
		this.setState({
			quote: "loading...",
			author: ""
		});
	}

	render() {
		let tweet = `${this.state.quote} - ${this.state.author}`;

		return (
			<div>
				<p id="quote">{this.state.quote}</p>
				<p id="author">{this.state.author}</p>
				<button onClick={this.getRandomQuote} className="btn btn-default">Get Quote</button>
				<button onClick={sendTweet(tweet)} className="btn btn-primary">Tweet</button>
			</div>
		);
	}
}