let p1 = Math.floor(Math.random()* 6) + 1;
let p2 = Math.floor(Math.random()* 6) + 1;

document.getElementsByClassName("img1")[0].setAttribute("src", `./images/dice${p1}.png`)
document.getElementsByClassName("img2")[0].setAttribute("src", `./images/dice${p2}.png`)

let element = document.querySelector('h1')
if(p1 > p2) {
    element.innerHTML = "Player 1 wins!"
} else if (p1 < p2) {
    element.innerHTML = "Player 2 wins!"
} else {
    element.innerHTML = "Draw!"
}