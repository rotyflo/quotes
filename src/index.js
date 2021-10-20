import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


$(function () {
  getQuote();

  $("#get-quote").on("click", function () {
    getQuote();
  });

  $("#tweet").on("click", function () {
    let quote = $("#quote").text();

    window.open(`https://twitter.com/intent/tweet?text=${quote}`);
  });

  function getQuote() {
    $("#quote").html("<i class='fa fa-cog fa-spin'></i> Loading...");

    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let i = getQuoteIndex(data.length);

        $("#quote").html(`"${data[i].text}"`);
        $("#author").html(`<i>- ${data[i].author}</i>`);
      });
  }

  function getQuoteIndex(maxNumber) {
    return Math.round(Math.random() * maxNumber);
  }
});

