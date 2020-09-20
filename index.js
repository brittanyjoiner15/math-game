//make a function that generates the equation

$(document).ready(function () {
  var interval;
  var timer = 10;

  var startGame = function () {
    if (!interval) {
      if (timer === 0) {
        updateTimeLeft(10);
        $("#timer").removeClass("wrongAnswer");
      }
      interval = setInterval(function () {
        updateTimeLeft(-1);
        if (timer === 0) {
          clearInterval(interval);
          interval = undefined;
          $("#timer").text("time is up");
          score = 0;
        }
      }, 1000);
    }
  };

  var currentEquation;

  var generateEquation = function () {
    var question = {};
    var x = parseInt(Math.random() * 10);
    var y = parseInt(Math.random() * 10);
    question.answer = x + y;
    question.equation = String(x) + " + " + String(y);

    return question;
  };

  currentEquation = generateEquation();
  $("#equation").text(currentEquation.equation);

  var score = 0;
  $("#score").text("Score = " + score);

  var updateTimeLeft = function (amount) {
    timer += amount;
    $("#timer").text(timer);
    if (timer < 6) {
      $("#timer").addClass("wrongAnswer");
    }
  };

  $("#check_guess").on("submit", function () {
    event.preventDefault();
    startGame();
    var guess = parseInt($("#guess").val());
    console.log(guess);
    console.log(currentEquation.answer);
    if (guess === currentEquation.answer) {
      $("#guess").val("");
      $("#status").addClass("rightAnswer");
      $("#status").text("correct!");
      score = score + 1;
      $("#score").text("Score = " + score);
      currentEquation = generateEquation();
      $("#equation").text(currentEquation.equation);
      updateTimeLeft(+1);
    } else {
      $("#status").removeClass("rightAnswer");
      $("#status").addClass("wrongAnswer");
      $("#status").text("try again!");
      $("#guess").val("");
    }
  });
});
