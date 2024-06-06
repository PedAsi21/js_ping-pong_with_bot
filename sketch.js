//Variable of the pin-pong ball
let xBall  = 300;
let yBall = 200;
let diameter = 13;
let radius = diameter /2;
//Variable of the speed ball
let speedXBall = 6;
let speedYBall = 6;
//Variable of the racket
let xRacket = 5;
let yRacket = 150;
let racketLenght = 10; //COMPRIMENTO
let racketHeight = 90; //ALTURA
//Variable of oponnent
let xOpponent = 585;
let yOpponent = 150;
let speedYOpponent;
//ScoredBoard
let myScore = 0;
let opponentScore = 0;
//Collision
let collision = false;
//sound of the game
let racketSound;
let scoreSound;
let soundtrack;

function preload () {
  soundtrack = loadSound ("trilha.mp3");
  scoreSound = loadSound ("ponto.mp3")
  racketSound = loadSound ("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  soundtrack.loop();
}

function draw() {
    background(0); //1 - Draw the background
    showBall(); //2 - Show/Draw ball
    movimentBall(); //3 - Moviment the ball 
    collisionBall(); //4 - Veri the collision of the ball
    showRacket(xRacket, yRacket); //5 - Draw the racket to the game
    movimentRacket(); //6 - Moviment the racket of the left side
    collisionRacket (xRacket, yRacket);//7 - racket collision
    showRacket (xOpponent, yOpponent); //8 - Show the bot racket
    movimentOpponent (); //9 - Moviment os the bot racket
    collisionRacket (xOpponent, yOpponent); //10 - opponent Collision
    scoredBoard (); //11 - ScoredBoard of the game
    score (); //12 - Score of the game
  
}
  function showBall () {
    circle (xBall ,yBall ,diameter)
}
  function movimentBall () {
    xBall  += speedXBall;
    yBall += speedYBall;
}
  function collisionBall () {
    if (xBall + radius > width || xBall - radius < 0) {
      speedXBall *= -1.1;
}
  if (yBall + radius > height || yBall - radius < 0) {
      speedYBall *= -1;
  }  
}
  function showRacket(x,y) {
      rect (x, y, racketLenght, racketHeight);
}
  function movimentRacket () {
    if(keyIsDown(UP_ARROW)) {
      yRacket -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRacket += 10;
    }
}

function collisionRacket (x, y) {
    collided = collideRectCircle (x, y, racketLenght, racketHeight, xBall, yBall, radius);
    if (collided) {
        speedXBall *= -1;
        racketSound.play()
    }
}

function movimentOpponent () {
  speedYOpponent = yBall - yOpponent - racketLenght / 2 - 30;
  yOpponent += speedYOpponent
}

function scoredBoard () {
  stroke (255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 0, 0));
  rect (150,10,40,20);
  fill(255);
  text (myScore, 170, 26);
  fill(color(255, 0, 0));
  rect (450,10,40,20);
  fill (255);
  text (opponentScore, 470, 26);
  
 }

function score () {
  if (xBall > 590) {
    myScore += 1;
    scoreSound.play();
  }
  if (xBall < 10) {
    opponentScore += 1;
    scoreSound.play();
  }
}
