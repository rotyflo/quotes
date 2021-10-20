import $ from 'jquery';
import getQuoteIndex from './getQuoteIndex';

export default function getQuote() {
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