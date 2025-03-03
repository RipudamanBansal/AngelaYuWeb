var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];
var level = -1;

$(document).on('keydown', function () {
  level++;
  nextSequence();
})

$(".btn").click(function () {
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);
  playSound(userChoosenColor);
  animatePress(userChoosenColor);
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
  $('h1').text(`Level ${level}`)
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $(`#${randomChoosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColor);
  animatePress(randomChoosenColor);
}

