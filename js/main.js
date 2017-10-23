$(document).ready(function() {
  // Fetch quote on page load
  getQuote();

  $("#get-quote").on("click", function() {
    getQuote();
  });

  $("#tweet").on("click", function() {
    let quote = $("#quote").text();
    let author = $("#author").text();

    window.open(`https://twitter.com/intent/tweet?text=${quote}${author}`);
  });

  function getQuote() {
    $("#quote").html("<i class='fa fa-cog fa-spin'></i> Loading...");
    $("#author").html("");

    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(json) {
      let quote = json[0].content;
      let author = "-" + json[0].title;

      $("#quote").html(quote);
      $("#author").html(author);
    });
  }
});