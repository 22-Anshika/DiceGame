var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage = "dice" + randomNumber1 + ".png";
var folderWidImg = "images/" + diceImage;
var player1Image = document.querySelectorAll("img")[0];
player1Image.setAttribute("src", folderWidImg);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "dice" + randomNumber2 + ".png";
var folderWidImg2 = "images/" + diceImage2;
var player2Image = document.querySelectorAll("img")[1];
player2Image.setAttribute("src", folderWidImg2);

if (randomNumber1 > randomNumber2){
       document.querySelector("h1").innerHTML = "🥳Player 1 Wins!";  
}
else if (randomNumber2 > randomNumber1){
       document.querySelector("h1").innerHTML = "Player 2 Wins!🥳";  
}
else {
       document.querySelector("h1").innerHTML = "Its a DRAW 🙌🏻";
}

