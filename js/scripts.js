$(function() {
  $("form#whales").submit(function(event) {
    event.preventDefault();
    // var first = $("#st").val();
    // var second = $("#nd").val();
    // var third = $("#rd").val();
    // var fourth = $("#th").val();
    var whales = ["st", "nd", "rd", "th"];
    whales.forEach(function(whale) {
      var userInput = $("#" + whale).val();
      $("." + whale).text(userInput);

    });

    console.log(whales)

  });
  var flavors = ["cookie-dough", "chocolate", "salted-carmel", "vanilla"];
  var loc = ["1", "2", "3", "4"];

    flavors.forEach(function(flavor) {
      $("#iceCream").append("<li id=" + flavor + ">" + flavor + "</li>");
      ;



  });
});
