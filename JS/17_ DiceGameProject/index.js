var player1 = Math.floor(Math.random() * 6)+1;
console.log(player1);
document.querySelector(".dice .img1").setAttribute("src","./images/dice"+player1+".png");

var player2 = Math.floor(Math.random() * 6)+1;
console.log(player2);
document.querySelector(".dice .img2").setAttribute("src","./images/dice"+player2+".png");

if(player1 === player2)
    document.querySelector(".container h1").innerHTML = "Draw!";

else if(player1 > player2)
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins";

else
    document.querySelector(".container h1").innerHTML = "Player 2 Wins🚩";
