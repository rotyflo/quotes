import $ from 'jquery';

$("#tweet").on("click", function () {
  let quote = $("#quote").text();

  window.open(`https://twitter.com/intent/tweet?text=${quote}`);
});