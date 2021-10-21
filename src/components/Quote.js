import React, { useState } from "react";
import getQuoteIndex from "../functions/getQuoteIndex";
import sendTweet from "../functions/sendTweet";

export default class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: "",
			author: ""
		}
		
		this.getQuote = this.getQuote.bind(this);
	}

	// Get quote on page load
	componentDidMount() {
		this.getQuote();
	}

	getQuote() {
		this.loading();

		fetch("https://type.fit/api/quotes")
			.then(response => response.json())
			.then(data => {
				let i = getQuoteIndex(data.length);
				this.setState({
					quote: `"${data[i].text}"`,
					author: `- ${data[i].author}`
				});
			});
	};

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
				<button onClick={this.getQuote} className="btn btn-default">Get Quote</button>
				<button onClick={sendTweet(tweet)} className="btn btn-primary">Tweet</button>
			</div>
		);
	}
}