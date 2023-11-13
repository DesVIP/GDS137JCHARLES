// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Player();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = 2;
	player.vy = 2;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	player.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(player.x > canvas.width - player.width/2)
	{
		player.vx = -player.vx;	
		player.x = canvas.width - player.width/2;
		player.vx = -20;
		
		
		
	}
	
	//---------------------------------------------------
	//left bounce
	if(player.x < 100 - player.width/2)
	{
		player.vx = -player.vx;
		player.vx < 100 - player.width/2;
		player.vx = 5;
		
		
		
	}

	//bottom bounce
	if(player.y > canvas.height+50 - player.height)
	{
		player.vy = -player.vy;
		player.y > canvas.height - player.height/2;
		player.vy = -5;
		
	}

	//top bounce
	if(player.y < player.height+750 - canvas.height)
	{
		player.vy = -player.vy
		player.y < player.height - canvas.height;
		player.vy = 15;
	}

player.draw();
	
}
