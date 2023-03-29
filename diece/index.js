
var randomNumber=Math.floor(Math.random()*6+1);
var randomDiceImage="/images/dice"+randomNumber+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceImage1="/images/dice"+randomNumber1+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage1);

if(randomNumber > randomNumber1)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomNumber === randomNumber1)
{
    document.querySelector("h1").innerHTML="🚩Draw!🚩"
}
else{
    document.querySelector("h1").innerHTML="player 2 Wins 🚩"
}
