//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var player1;
var ball;
var prevX;
var player2;
var p1Wins = 0;
var p2Wins = 0;

//Set Up the Canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Instantiate the Player
player1 = new GameObject();
ball = new GameObject();
player2 = new GameObject(
  canvas.width / 2 + 502,
  canvas.height / 2,
  20,
  150,
  "#00D241"
);
ball.x = 100;

//------Declare the Player's speed on the x and y axis------
ball.vx = -10;
ball.vy = 0;
//----------------------------------------------------

//Set the Animation Timer
timer = setInterval(animate, interval);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  

  //--------------Bounce of Right----------------------
  if (ball.x > canvas.width - ball.width / 2) {
    ball.vy = 0;

    ball.vx > canvas.width + ball.width / 2;
    ball.vx = 10;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    p1Wins++;
    console.log(p1Wins);
  }
  //---------------------------------------------------

  //------------Bounce of Left-------------------------
  if (ball.x < ball.width / 2) {
    ball.vy = 0;

    ball.vx < canvas.width - ball.width / 2;
    ball.vx = -10;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    p2Wins++;
    console.log(p2Wins);
  }

  //---------------------------------------------------

  //---------------Bounce of Down----------------------
  if (ball.y > canvas.height) {
    console.log(ball.y);
    ball.vy = -ball.vy;
    ball.y < ball.height - canvas.height;
    ball.vy = -10;
  }
  //---------------------------------------------------

  //---------------Bounce of Up------------------------
  if (ball.y < 0) {
    ball.vy = -ball.vy;
    ball.y < ball.height / 2;
    ball.vy = 10;
  }
  //Erase the Screen
  context.clearRect(0, 0, canvas.width, canvas.height);

  //Move the Player to the right

  if (w) {
    //console.log("Moving Up");
    player1.y += -10;
    //console.log(player.y);
  }
  if (s) {
    //console.log("Moving Down");
    player1.y += 10;
  }
  if (i) {
    player2.y += -10;
  }
  if (j) {
    player2.y += 10;
  }

  //Boundaries

  //---------------Boundary of Down----------------------
  if (player1.y > 725) {
    player1.y = 725;
  }
  if (player2.y > 725) {
    player2.y = 725;
  }

  //---------------Boundary of Up------------------------
  if (player1.y < player1.height / 2) {
    player1.y = player1.height / 2;
  }
  if (player2.y < player2.height / 2) {
    player2.y = player2.height / 2;
  }

  //Paddle Boundary
  if (player1.hitTestObject(ball)) {
    //Top
    if (ball.y < player1.y - 25) {
      ball.vx = -10;
      ball.vy = -10;
    }
    //Bottom
    if (ball.y > player1.y + 25) {
      ball.vx = -10;
      ball.vy = 10;
    }
    //Middle
    ball.x = prevX;
    ball.vx = 0 - ball.vx;
    console.log("colliding");
  } else {
    prevX = ball.x;
  }

  if (player2.hitTestObject(ball)) {
    //Top
    if (ball.y < player2.y - 25) {
      ball.vx = 10;
      ball.vy = -10;
    }
    //Bottom
    if (ball.y > player2.y + 25) {
      ball.vx = 10;
      ball.vy = 10;
    }
    //Middle
    ball.x = prevX;
    ball.vx = 0 - ball.vx;
    console.log("colliding");
  } else {
    prevX = ball.x;
  }

  context.save();
  context.strokeStyle = "yellow";
  context.beginPath();
  context.moveTo(500, 0);
  context.lineTo(500,800);
  context.closePath();
  context.lineWidth = 5;
  context.stroke();
  context.restore();

  context.font = "20px Mariam Fixed";
  context.fillText("Player 1 | Player 2", 428, 50);
  context.fillText(p1Wins + " - " + p2Wins, 483, 75);

  

  //Update the Screen
  player1.drawRect();
  player2.drawRect();
  ball.drawCircle();
  ball.move();
}
