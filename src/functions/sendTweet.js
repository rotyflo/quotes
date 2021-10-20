import $ from 'jquery';

export default function sendTweet() {
  let quote = $("#quote").text();
  window.open(`https://twitter.com/intent/tweet?text=${quote}`);
}