//Variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var HealthBlock1;
var HealthBlock2;
var HealthBlock3;
var player;
var timer;
var interval = 1000 / 60;

//Canvas Properties
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Blocks and Player Properties
HealthBlock1 = new GameObject(50, 0, 100, 100, "#00D241");
HealthBlock2 = new GameObject(190, 0, 100, 100, "#00D241");
HealthBlock3 = new GameObject(330, 0, 100, 100, "#00D241");
player = new GameObject();

timer = setInterval(animate, interval);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    HealthBlock1.drawRect();
    HealthBlock2.drawRect();
    HealthBlock3.drawRect();
}
