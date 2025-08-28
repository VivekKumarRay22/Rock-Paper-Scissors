var randomNumber1 = Math.floor(Math.random() * 3) + 1;
var randomImage1 = "rpc" + randomNumber1 + ".jfif";
var image1 = "./images/" + randomImage1;

document.querySelectorAll("img")[1].setAttribute("src", image1);

var randomNumber2 = Math.floor(Math.random() * 3) + 1;
var randomImage2 = "rpc" + randomNumber2 + ".jfif";
var image2 = "./images/" + randomImage2;

document.querySelectorAll("img")[2].setAttribute("src", image2);

if (randomNumber1 ===1 && randomNumber2 === 2) {
    // player2 wins
    document.querySelector("h2").innerHTML = " Player 2 wins!! ";
}
else if (randomNumber1 === 1 && randomNumber2 === 3) {
    // player1 wins
    document.querySelector("h2").innerHTML = " Player 1 wins!! ";
} 
else if (randomNumber1 === 2 && randomNumber2 === 3) {
    // player2 wins
    document.querySelector("h2").innerHTML = " Player 2 wins!! ";
} 
else if (randomNumber1 === 2 && randomNumber2 === 1) {
    // player1 wins
    document.querySelector("h2").innerHTML = " Player 1 wins!! ";
} 
else if (randomNumber1 === 3 && randomNumber2 === 1) {
    // player2 wins
    document.querySelector("h2").innerHTML = " Player 2 wins!! ";
} 
else if (randomNumber1 === 3 && randomNumber2 === 2) {
    // player1 wins
    document.querySelector("h2").innerHTML = " Player 1 wins!! ";
} 
else if (randomNumber1 === randomNumber2) {
    // draw
    document.querySelector("h2").innerHTML = " It's a draw!! ";
}