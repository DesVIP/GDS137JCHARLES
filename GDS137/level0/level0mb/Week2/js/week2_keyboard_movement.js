//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	
	if(w)
	{
		console.log("Moving Up");
		player.y += -2;
	}
	if(s)
	{
		console.log("Moving Down")
		player.y += 2;
	}

	//Boundaries

	
	//---------------Boundary of Down----------------------
    if(player.y > 725)
	{
		
		player.y = 725;
	}

	//---------------Boundary of Up------------------------
	if(player.y < player.height/2)
	{
		player.y = player.height/2;
	}


	//Update the Screen
	player.drawRect();
	player.draw();
}

