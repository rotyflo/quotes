$(document).ready(function() {
  // Fetch quote on page load
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(json) {
    $("#quote").html(
      "<p>" + json[0].content + "</p>" +
      "<p> -" + json[0].title + "</p>"
    );
  });

  // 'Get Quote' button functionality
  $("#get-quote").on("click", function() {
    // Animate while waiting for quote
    $("#get-quote").html("<i class='fa fa-refresh fa-spin'></i> Get Quote");

    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(json) {
      // Received quote, end animation
      $("#get-quote").html("<i class='fa fa-refresh'></i> Get Quote");

      // Insert quote
      $("#quote").html(
        "<p>" + json[0].content + "</p>" +
        "<p> -" + json[0].title + "</p>"
      );
    });
  });

  // 'Tweet' button functionality
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + $("#quote").text());
  });
});
