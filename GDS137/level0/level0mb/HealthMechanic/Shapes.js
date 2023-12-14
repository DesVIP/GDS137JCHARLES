//Variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var HealthBlock1;
var HealthBlock2;
var HealthBlock3;
var player;
var timer;
var interval = 1000 / 60;
var CollisionBall;

//Canvas Properties
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Game Objects
HealthBlock1 = new GameObject(50, 0, 100, 100, "#00D241");
HealthBlock2 = new GameObject(190, 0, 100, 100, "#00D241");
HealthBlock3 = new GameObject(330, 0, 100, 100, "#00D241");
player = new GameObject();
CollisionBall = new GameObject()

//Properties
player.x = 500;
player.y = 700;
player.height = 50
player.width = 50
CollisionBall.x = canvas.width/2;
CollisionBall.y = canvas.height/2;
CollisionBall.width = 100;
CollisionBall.height = 100;
player.color = "yellow";


timer = setInterval(animate, interval);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);


    //Controls
    if (w) {
        //console.log("Moving Up");
        player.y += 10;
        //console.log(player.y);
      }
      if (s) {
        //console.log("Moving Down");
        player.y += -10;
      }
      if (a) {
        player.x += -10;
      }
      if (d) {
        player.x += 10;
      }

      //Collisions
      
      if (player.hitTestObject(CollisionBall)) {
        player.color = "red"
        HealthBlock1.color = "red";
      } else {
        player.color = "yellow"
      }

      

















    HealthBlock1.drawRect();
    HealthBlock2.drawRect();
    HealthBlock3.drawRect();
    player.drawRect();
    CollisionBall.drawCircle();

}
