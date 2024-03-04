
var randomVar = Math.floor(Math.random() * 6) + 1;
var randomVar2 = Math.floor(Math.random() * 6) + 1;

var imageSrcOne = "./images/dice"+ randomVar + ".png";
var imageSrctwo = "./images/dice"+ randomVar2 + ".png";

var plOne = "🚩Player 1 Wins"
var plTwo = "Player 2 Wins  🚩"
var dr = "Draw";

document.querySelector(".img1").setAttribute("src",imageSrcOne)
document.querySelector(".img2").setAttribute("src",imageSrctwo)


if(randomVar > randomVar2){
    document.querySelector("h1").textContent = plOne;
}else if(randomVar < randomVar2){
    document.querySelector("h1").textContent = plTwo;
}else{
    document.querySelector("h1").textContent = dr;
}


