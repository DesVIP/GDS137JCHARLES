//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var player;
var ball;
var prevX;
var score = 0;

//Set Up the Canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Instantiate the Player
player = new GameObject();
ball = new GameObject();
ball.x = 500;
ball.y = 500;
player.x = 500;
player.y = 700;
player.width = 250;
player.height = 40;

//------Declare the Player's speed on the x and y axis------
ball.vx = 0;
ball.vy = 1;

//----------------------------------------------------

//Set the Animation Timer
timer = setInterval(animate, interval);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  ball.move();


  //Top bounce
  if(ball.y <= 0 + ball.height/2) {
    ball.vy = -ball.vy;
  }


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
    ball.vy = 5;
  }

  

  //Move the Player to the right

  if(a)
	{
		console.log("Moving Right");
		player.x += -2;
	}
	if(d)
	{
		console.log("Moving Left");
		player.x += 2;
	}
	if(w)
	{
		console.log("Moving Up");
		player.y += 2;
	}
	if(s)
	{
		console.log("Moving Down")
		player.y += -2;
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

  //Middle
  if (player.hitTestObject(ball)) {
    ball.x = prevX;
    ball.vy = -35 ;
    console.log("colliding");
  } else {
    prevX = ball.x;
  }

  //Left Middle
  if (ball.x < player.x - 100) {
    ball.vy = -35
    ball.vx = -ball.force
    console.log("colliding2");
  }

  //Left
  if (ball.x < player.x - 100) {
    ball.vy = -35
    ball.vx = ball.force*5
  }

  //Right Middle
  if (ball.x > player.x - 100) {
    ball.vy = -35
    ball.vx = ball.force
  }
  
   //Right
  if (ball.x > player.x - 100) {
    ball.vy = -35
    ball.vx = ball.force*5
  }
  

  //Score
  context.font = "25px black";
  context.font = "Arial";
  context.fillText("Score: ", 80, 25 );
  

  //Line
  context.beginPath();
  context.moveTo(player.x, player.y);
  context.lineTo(ball.x, ball.y);
  context.closePath();
  context.lineWidth = 2;
  context.stroke();
  context.restore();


  //Update the Screen
  player.drawRect();
  ball.drawCircle();
  
}
