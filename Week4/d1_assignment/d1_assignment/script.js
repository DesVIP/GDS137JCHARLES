var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')


//Line
ctx.fillStyle = "none";
ctx.strokeStyle = "rgb(255,0,0)";
ctx.lineWidth ="5";

ctx.beginPath();
ctx.moveTo(278,549);
ctx.lineTo(87,682);
ctx.closePath();
ctx.fill()
ctx.stroke();



//Circle
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5px";

ctx.beginPath();
ctx.arc(386,442,70,0, (10 * Math.PI)/4, false);
ctx.lineTo(455,450);
ctx.closePath();
ctx.fill()
ctx.stroke();


//Pentagon
ctx.fillStyle = "#ff00ff"; 
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = "5px";

ctx.beginPath();
ctx.moveTo(558,308);
ctx.lineTo(666,282);
ctx.lineTo(728,378);
ctx.lineTo(651,464);
ctx.lineTo(545,419);
ctx.lineTo(558,308);
ctx.closePath();
ctx.fill();
ctx.stroke();


//Square
ctx.fillStyle = "yellow"; 
ctx.strokeStyle = "black";
ctx.lineWidth = "5px";

ctx.beginPath();
ctx.moveTo(85,301);
ctx.lineTo(185,300);
ctx.lineTo(185,401);
ctx.lineTo(84,401);
ctx.lineTo(85,301);
ctx.closePath();
ctx.fill();
ctx.stroke();


//Star
ctx.fillStyle = "#ffff00"; 
ctx.strokeStyle = "rgb(32,32,32)";
ctx.lineWidth = "5px";

ctx.beginPath();
ctx.moveTo(636,496);
ctx.lineTo(667,553);
ctx.lineTo(733,566);
ctx.lineTo(689,615);
ctx.lineTo(696,680);
ctx.lineTo(635,654);
ctx.lineTo(576,680);
ctx.lineTo(579,615);
ctx.lineTo(537,566);
ctx.lineTo(604,552);
ctx.lineTo(636,496);
ctx.closePath();
ctx.fill();
ctx.stroke();



























