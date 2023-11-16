//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var player;
var ball;

//Set Up the Canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Instantiate the Player
player = new GameObject();
ball = new GameObject();

//------Declare the Player's speed on the x and y axis------
ball.vx = 2;
ball.vy = 2;
//----------------------------------------------------

//Set the Animation Timer
timer = setInterval(animate, interval);

function animate() {
  //----Movement Using the Player's move() function----

  //---------------------------------------------------

  //--------------Bounce of Right----------------------
  if (ball.x > canvas.width - ball.width / 2) {
    ball.vx = -ball.vx;
    ball.x = canvas.width - ball.width / 2;
    ball.vx = -30;
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
  if (ball.y > canvas.height) {
    ball.vy = -ball.vy;
    ball.y < ball.height - canvas.height;
    ball.vy = -12;
  }
  //---------------------------------------------------

  //---------------Bounce of Up------------------------
  if (ball.y < 0) {
    ball.vy = -ball.vy;
    ball.y < ball.height / 2;
    ball.vy = 25;
  }
  //Erase the Screen
  context.clearRect(0, 0, canvas.width, canvas.height);

  //Move the Player to the right

  if (w) {
    console.log("Moving Up");
    player.y += -2;
  }
  if (s) {
    console.log("Moving Down");
    player.y += 2;
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

  //Update the Screen
  player.drawRect();
  ball.drawCircle();

  ball.move();
}
