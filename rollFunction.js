function bgdYellow(){
  document.querySelector("body").style.backgroundColor = "yellow";
}

function rollDice() {
  // setTimeout(bgdYellow,500);
  setTimeout(die1,200);
}

function die1(){
  document.querySelector("#die1").src = "images/dice1.png"
  document.querySelector("#die2").src = "images/dice1.png"
  setTimeout(die2,200);
}

function die2(){
  document.querySelector("#die1").src = "images/dice2.png"
  document.querySelector("#die2").src = "images/dice2.png"
  setTimeout(die3,200);
}

function die3(){
  document.querySelector("#die1").src = "images/dice3.png"
  document.querySelector("#die2").src = "images/dice3.png"
  setTimeout(die4,200);
}

function die4(){
  document.querySelector("#die1").src = "images/dice4.png"
  document.querySelector("#die2").src = "images/dice4.png"
  setTimeout(die5,200);
}

function die5(){
  document.querySelector("#die1").src = "images/dice5.png"
  document.querySelector("#die2").src = "images/dice5.png"
  setTimeout(die6,200);
}

function die6(){
  document.querySelector("#die1").src = "images/dice6.png"
  document.querySelector("#die2").src = "images/dice6.png"
  setTimeout(diePlain,200);
}

function diePlain(){
  document.querySelector("#die1").src = "images/dicePlain.png"
  document.querySelector("#die2").src = "images/dicePlain.png"
  setTimeout(randomizeResult,500);
}

function randomizeResult(){
  var number1 = (Math.floor(Math.random()*6)+1);
  var number2 = (Math.floor(Math.random()*6)+1);

  document.querySelector("#die1").src = "images/dice"+number1+".png"
  document.querySelector("#die2").src = "images/dice"+number2+".png"

  if(number1>number2){
    showResult(1);
  }
  else if(number1<number2){
    showResult(2);
  }
  else{
    showDraw();
  }
  // alert("Number 1 : "+number1+"     Number 2 : "+number2);
}

function showResult(num){
  document.querySelector("#result").innerText = "Player "+num+" wins !!"
}
function showDraw(){
  document.querySelector("#result").innerText = "It is a draw. Roll again 😃"
}
