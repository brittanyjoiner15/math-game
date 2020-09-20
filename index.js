//make a function that generates the equation

$(document).ready(function () {
  var currentEquation;

  var generateEquation = function () {
    var question = {};
    var x = parseInt(Math.random() * 100);
    var y = parseInt(Math.random() * 100);
    question.answer = x + y;
    question.equation = String(x) + " + " + String(y);

    return question;
  };

  currentEquation = generateEquation();
  $("#equation").text(currentEquation.equation);

  var score = 0;
  $("#score").text("Score = " + score);

  $("#check_guess").on("submit", function () {
    event.preventDefault();
    var guess = parseInt($("#guess").val());
    console.log(guess);
    console.log(currentEquation.answer);
    if (guess === currentEquation.answer) {
      console.log("right!");
      $("#status").text("correct!");
      score = score + 1;
      $("#score").text("Score = " + score);
      currentEquation = generateEquation();
      $("#equation").text(currentEquation.equation);
    } else {
      $("#status").text("wrong!");
    }
  });
});

//make a function that checks the input and see if it matches question.answer when submit is clicked ; done

//set the score: done

//make a function that starts a timer when start button is clicked

//update the checkInput function to add a second to the timer and update the score if answer is correct

//when timer runs out, say "game end" and change color of start button to primary and make it start the timer and reset the score
