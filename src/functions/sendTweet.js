// (event) prevents 'window.open' on page load
const sendTweet = (quote) => (event) => {
	window.open(`https://twitter.com/intent/tweet?text=${quote}`);
}

export default sendTweet;