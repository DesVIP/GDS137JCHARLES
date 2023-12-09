//Declare my variables

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var player;
var ball;
var prevX;
var score = 0;
var gravity = 1
var frictionX = .85;
var frictionY = .97;

//Set Up the Canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Instantiate the Player
player = new GameObject();
ball = new GameObject();


ball.x = canvas.width/2;
ball.y = canvas.height/2;
player.x = canvas.width/2;
player.y = canvas.height/2 - 50


ball.width = 80;
ball.height = 80;
player.width = 250;
player.height = 40;

//------Declare the Player's speed on the x and y axis------
ball.vx = 1;
ball.vy = 0;


//----------------------------------------------------

//Set the Animation Timer
timer = setInterval(animate, interval);

function animate() {

  context.clearRect(0, 0, canvas.width, canvas.height);

  //Ball Movement/Friction/Gravity

  ball.move();
  ball.vy *= frictionY;
  ball.vy += gravity;

//-------------Bounce off Bottom---------------
if(ball.y >= canvas.height -ball.height/2)
{
  ball.y = canvas.height - ball.height
  ball.vy = -ball.vy
      ball.vy += gravity;
      ball.y += ball.vy;
      score = 0
}

  //--------------Bounce off Top------------------
if(ball.y <= 0 + ball.height/2)
{
  ball.vy = -ball.vy;
}

  //--------------Bounce Right---------------------
if(ball.x > canvas.width - ball.width/2)
{
  ball.x = canvas.width - ball.width/2
  ball.vx = -ball.vx;
}

  //--------------Bounce Left----------------------
if(ball.x < 0 +ball.width/2)
{
  ball.x = 0 + ball.width/2
  ball.vx = -ball.vx;
}

//Ball to Player(Paddle) Collision

if(ball.hitTestObject(player))
    {
    ball.vy = player.y - ball.y/2 - player.y/2
    ball.vy = -35
    score = score +1
    }

//Player(Paddle) Movement & Friction

if (a)
{
    console.log("Left");
    paddle.vx += -2
}
if (d)
{
    console.log("Right");
    paddle.vx += 2
}

player.vx *= frictionX;
player.x += paddle.vx;

//Player(Paddle) Inner/Outer Collision

if(ball.x < player.x - player.width/6)
    {
    ball.vx = -ball.force
    }

    if(ball.x < player.x + paddle.width /6)
    {
    ball.vx = -ball.force
    }

    if(ball.x > player.x - player.width/3)
    {
    ball.vx = -ball.force
    }

    if(ball.x > player.x + player.width /3)
    {
    ball.vx = ball.force
    }

 //Player(Paddle) Left & Right Collision

 if (player.x < 0 + player.width /2)
 {
     player.x = 0 + player.width /2
 }

 if (player.x > canvas.width - player.width /2)
 {
     player.x = canvas.width - player.width /2
 }

 //Line Properties
 context.beginPath();
 context.moveTo(player.x, player.y);
 context.lineTo(ball.x, ball.y);
 context.closePath();
 context.lineWidth = 2;
 context.stroke();
 context.restore();

 //Score
 context.font = "16px Arial";
    context.fillText("Score", 0 + ball.width/2, ball.width/2);
    context.fillText(score, 0 + ball.width + ball.width/2, ball.width/2);
    
 //Game Output
 ball.drawCircle()
 player.drawRect()
}