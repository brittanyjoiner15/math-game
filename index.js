//make a function that generates the equation
var generateEquation = function () {
  var x = parseInt(Math.random() * 100);
  var y = parseInt(Math.random() * 100);
  var z = x + y;
  console.log(x, y, z);
};

console.log(generateEquation());

//make a function that checks the input and see if it matches z when submit is clicked

$("#check_guess").submit(function (event) {
  event.preventDefault();
  var guess = $("#guess").val();
  console.log(guess);
  //   if ((guess = z)) {
  //     console.log("right");
  //   } else {
  //     console.log("wrong");
  //   }
});

//set the score

//make a function that starts a timer when start button is clicked

//update the checkInput function to add a second to the timer and update the score if answer is correct
