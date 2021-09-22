$(document).ready(function() {
  // Fetch quote on page load
  getQuote();

  $("#get-quote").on("click", function() {
    getQuote();
  });

  $("#tweet").on("click", function() {
    let quote = $("#quote").text();

    window.open(`https://twitter.com/intent/tweet?text=${quote}`);
  });

  function getQuote() {
    $("#quote").html("<i class='fa fa-cog fa-spin'></i> Loading...");

    $.getJSON("https://www.reddit.com/r/quotes/top.json", function(json) {
      let i = getQuoteIndex();
      let quote = json.data.children[i].data.title;

      $("#quote").html(quote);
    });
  }

  function getQuoteIndex() {
    return Math.round(Math.random() * 25);
  }
});