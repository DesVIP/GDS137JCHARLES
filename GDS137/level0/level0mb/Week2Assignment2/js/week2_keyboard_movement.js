//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var player;
var ball;
var prevX;

//Set Up the Canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Instantiate the Player
player = new GameObject();
ball = new GameObject();
ball.x = 100;

//------Declare the Player's speed on the x and y axis------
ball.vx = 2;
ball.vy = 2;
//----------------------------------------------------

//Set the Animation Timer
timer = setInterval(animate, interval);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  //--------------Bounce of Right----------------------
  if (ball.x > canvas.width - ball.width / 2) {
    ball.vx = -ball.vx;
    ball.x = canvas.width - ball.width / 2;
    ball.vx = -10;
  }
  //---------------------------------------------------

  //------------Bounce of Left-------------------------
  if (ball.x < ball.width / 2) {
    ball.vx = -ball.vx;
    ball.vx < canvas.width - ball.width / 2;
    ball.vx = 10;
   }
   
  //---------------------------------------------------

  //---------------Bounce of Down----------------------
  if (ball.y  > canvas.height) {
    console.log(ball.y)
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
    console.log("Moving Up");
    player.y += -4;
  }
  if (s) {
    console.log("Moving Down");
    player.y += 4;
  }

  //Boundaries

  //---------------Boundary of Down----------------------
  if (player.y > 725) {
    player.y = 725;
  }

  //---------------Boundary of Up------------------------
  if (player.y < player.height / 2) {
    player.y = player.height / 2;
  }

  //Paddle Boundary
  if (player.hitTestObject(ball)) {
    ball.x = prevX;
    ball.vx = 0 - ball.vx;
    console.log("colliding");
  } else {
    prevX = ball.x;
  }

  //Update the Screen
  player.drawRect();
  ball.drawCircle();
  ball.move();
}
