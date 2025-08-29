// Random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 3) + 1;
var randomImage1 = "rpc" + randomNumber1 + ".jfif";
var image1 = "./images/" + randomImage1;

// Update Player 1 image
$(".img1").attr("src", image1);

// Random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 3) + 1;
var randomImage2 = "rpc" + randomNumber2 + ".jfif";
var image2 = "./images/" + randomImage2;

// Update Player 2 image
$(".img2").attr("src", image2);

// Decide the winner
if (randomNumber1 === 1 && randomNumber2 === 2) {
  $("h2").text("Player 2 wins!!");
} 
else if (randomNumber1 === 1 && randomNumber2 === 3) {
  $("h2").text("Player 1 wins!!");
} 
else if (randomNumber1 === 2 && randomNumber2 === 3) {
  $("h2").text("Player 2 wins!!");
} 
else if (randomNumber1 === 2 && randomNumber2 === 1) {
  $("h2").text("Player 1 wins!!");
} 
else if (randomNumber1 === 3 && randomNumber2 === 1) {
  $("h2").text("Player 2 wins!!");
} 
else if (randomNumber1 === 3 && randomNumber2 === 2) {
  $("h2").text("Player 1 wins!!");
} 
else if (randomNumber1 === randomNumber2) {
  $("h2").text("It's a draw!!");
}
