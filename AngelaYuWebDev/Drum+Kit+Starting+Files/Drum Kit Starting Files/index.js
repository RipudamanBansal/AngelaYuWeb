let handleClick = () => {
  alert("button clicked");
};

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("pressed");
  }
}

document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
});

document.addEventListener("keydown", function (e) {
  makeSound(e.key)
  buttonAnimation(e.key)
});

var buttonAnimation = (currentKey) => {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add("pressed")
  setTimeout(() => {
    activeButton.classList.remove("pressed")
  }, 75);
}
