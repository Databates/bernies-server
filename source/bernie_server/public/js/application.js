$(document).ready(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    function Recipe (id, name, description, ingredients, directions){
      this.id = id;
      this.name = name;
      this.description = description;
      this.ingredients = ingredients;
      this.directions = directions;
    }

    var kale_burger = new Recipe(1, "Kale Burger", "Combining the taste of cow with the nutrition of kale!", "Kale, Cow", "Preheat oven to 500 degrees, put in a cow. Wait 10 minutes. Put in some kale. Take out cow and kale. Put on bun. Serve HOT!");
    var peanut_butter = new Recipe(2, "Peanut Butter Coffee Brownie")
    var poodle_cake = new Recipe(3, "Poodle Cake (For your puppy!")
    var recipes

    // var recipe1 = "<p>Kale Burger, description:"Combining the taste of cow with the nutrition of kale!", ingredients:"Kale, Cow", directions:"Preheat oven to 500 degrees, put in a cow. Wait 10 minutes. Put in some kale. Take out cow and kale. Put on bun. Serve HOT!"
    // var food = "<p>Kale Burger</p>"
    var command = "<p>" + $("#command").val() + "</p>"
    var prompt = "<p>bernie@bistro $:" + $("#command").val() + "</p>"
    $("#com_hist").append(prompt);
    var com = $("#command").val();
    if (com === "list") {
      $("#com_hist").append("<p>" +kale_burger.id + ". " + kale_burger.name + "</p>");
      $("#com_hist").append("<p>" +peanut_butter.id + ". " + peanut_butter.name + "</p>");
      $("#com_hist").append("<p>" +poodle_cake.id + ". " + poodle_cake.name + "</p>");
}

    if (com === "clear") {
      $("#com_hist").empty();
    }
    // } else if (com === "display 1"){
    //   $("#com_hist").append("<p>" +kale_burger.id + " - " + kale_burger.name + "</p> <br /> <p>" + kale_burger.description "</p>");
    // }
    $("form").trigger('reset');
  });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
