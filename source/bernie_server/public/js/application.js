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

//sorry guys, i know this code sucks but I just wanted to get something up quick while taking a rails break: 
     if (com === "display 1") {
      $("#com_hist").append("<p>name: Kale Burger</p><p>description:<br>Combining the taste of cow with the nutrition of kale!</p> <p>ingredients:<br>Kale, Cow</p> <p>directions:<br>Preheat oven to 500 degrees, put in a cow. Wait 10 minutes. Put in some kale. Take out cow and kale. Put on bun. Serve HOT!</p>");
    }

     if (com === "display 2") {
      $("#com_hist").append("<p>name: Poodle Cake (For your puppy!)</p><p>description:<br>Poodle Cake (For your puppy!), Poople cakes! Perfect for pet poodle!</p> <p>ingredients:<br>Kibble, Hot dogs</p> <p>directions:<br>Mix kibble with hot dog. Bake at 500 degrees for 25 minutes. DO NOT ADD CHOCOLATE</p>");
    }

    if (com === "display 3") {
      $("#com_hist").append("<p>name: Peanut Butter Coffee Brownie</p><p>description:<br>Just looking has caused people to gain 10 pounds!</p> <p>ingredients:<br>Chocolate, Peanut Butter, Espresso, Cream Cheese</p> <p>directions:<br>Chew the espresso beans to a pulp, spit them into the bowl. Now mix in the chocolate, cream cheese, and peanut butter. Bake at 450 for 45 minutes</p>");
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
