//Variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer;
var interval = 1000 / 60;
var player;
var ball;
var prevX;
var score = 0;
var gravity = 1;
var frictionX = 0.85;
var frictionY = 0.97;

//Canvas Propterties
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Ball and Paddle Properties
paddle = new GameObject();
ball = new GameObject();

ball.x = canvas.width / 2;
ball.y = canvas.height / 2;
paddle.x = canvas.width / 2;
paddle.y = canvas.height - 50;

ball.width = 80;
ball.height = 80;
paddle.width = 250;
paddle.height = 40;
paddle.force = 2;

//------Declare the Player's speed on the x and y axis------
ball.vx = 5;
ball.vy = 0;
ball.force = 5;

//----------------------------------------------------

//Set the Animation Timer
timer = setInterval(animate, interval);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  //Ball Movement/Friction/Gravity

  ball.move();
  ball.vy *= frictionY;
  ball.vy += gravity;

  //Player(Paddle) Movement & Friction

  if (a) {
    console.log("Left");
    paddle.vx += -2;
  }

  if (d) {
    console.log("Right");
    paddle.vx += 2;
  }

  paddle.vx *= frictionX;
  paddle.x += paddle.vx;

  //Ball to Player(Paddle) Collision

  if (ball.hitTestObject(paddle)) {
    ball.vy = paddle.y - ball.y / 2 - paddle.y / 2;
    ball.vy = -35;
    score = score + 1;
    

    //Player(Paddle) Inner/Outer Collision

    if (ball.x < paddle.x - paddle.width / 6) {
      ball.vx = -ball.force;
    }

    if (ball.x < paddle.x + paddle.width / 6) {
      ball.vx = -ball.force;
    }

    if (ball.x > paddle.x - paddle.width / 3) {
      ball.vx = -ball.force;
    }

    if (ball.x > paddle.x + paddle.width / 3) {
      ball.vx = ball.force;
    }

   
  }

  //--------------Up Bounce------------------
  if (ball.y <= 0 + ball.height / 2) {
    ball.vy = -ball.vy;
  }

  //-------------Down Bounce---------------
  if (ball.y >= canvas.height - ball.height / 2) {
    ball.y = canvas.height - ball.height;
    ball.vy = -ball.vy * 0.67;
    ball.vy += gravity;
    ball.y += ball.vy;
    score = 0;
  }

  //--------------Left Bounce----------------------
  if (ball.x < 0 + ball.width / 2) {
    ball.x = 0 + ball.width / 2;
    ball.vx = -ball.vx;
  }

  //--------------Right Bounce---------------------
  if (ball.x > canvas.width - ball.width / 2) {
    ball.x = canvas.width - ball.width / 2;
    ball.vx = -ball.vx;
  }

  //Player(Paddle) Left & Right Collision

  if (paddle.x < 0 + paddle.width / 2) {
    paddle.x = 0 + paddle.width / 2;
  }

  if (paddle.x > canvas.width - paddle.width / 2) {
    paddle.x = canvas.width - paddle.width / 2;
  }

  //Line Properties
  context.beginPath();
  context.moveTo(paddle.x, paddle.y);
  context.lineTo(ball.x, ball.y);
  context.closePath();
  context.lineWidth = 2;
  context.stroke();
  context.restore();

  //Score
  context.font = "25px Arial";
  context.fillText("Score", 0 + ball.width / 2, ball.width / 2);
  context.fillText(score, 0 + ball.width + ball.width / 2, ball.width / 2);

  //Game Output
  ball.drawCircle();
  paddle.drawRect();
}
