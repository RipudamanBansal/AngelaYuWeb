var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);
  playSound(userChoosenColor);
  animatePress(userChoosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(color) {
  $(`#${color}`).addClass("pressed");

  setTimeout(() => {
    $(`#${color}`).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  $("h1").text(`Level ${level}`);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $(`#${randomChoosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColor);
  animatePress(randomChoosenColor);
}

function checkAnswer(inputLevel) {
  if (userClickedPattern[inputLevel] === gamePattern[inputLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      userClickedPattern = [];
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      level = -1;
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
  }
  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
}
