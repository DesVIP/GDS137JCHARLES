//Declre Varibles
var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var score;

//weight vars
var light = "light";
var heavy = "heavy";
var Pweight;

//---------------Set Friction and Gravity-----------------
var frictionX = .85;	
var frictionY = .97;
var gravity = 0.02;
//--------------------------------------------------------

var Pweight = ["light","heavy"].sort(function() 
{
    return 0.5 - Math.random();
})[0];
 
 //alert(weight);

canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player = new GameObject();
	player.force = 2;
	
	timer = setInterval(animate, interval);

        //Player
    player = new GameObject ({ });
        //player.color = "#90613e";
        player.y = 0 + player.height + player.height/3
        player.x = canvas.width/2
        player.height = 170;
        player.width = 170;
        player.vx += gravity;
        player.vy += gravity;

        //Yellow
    platform1 = new GameObject ();
        platform1.width = 600;
        platform1.height = 200;
        platform1.x = canvas.width - player.width/2; 
        platform1.y = canvas.height;
        platform1.color = "#ead56b";

        //Blue
    platform2 = new GameObject ();
        platform2.width = platform1.width;
        platform2.height = platform1.height;
        platform2.x = 0 + player.width/2;
        platform2.y = canvas.height;
        platform2.color = "#63c0d6";
    
    var fX = .85;
	var fY = .97;
	timer = setInterval(animate, interval);

    function animate()
{    
        context.clearRect(0,0,canvas.width, canvas.height);	

        //Color of the player
        if (Pweight == light)
        {
            player.color = "#E4D00A";
        }else if (Pweight == heavy) {
            player.color = "#4682B4";
        //Makes player move to the left or right
        if (left==true)
        {
            player.x = 0 + player.width
        }
        if (right == true)
        {
            player.x = canvas.width - player.width
        }
    	player.vy += gravity;
	    player.y += player.vy;

        //Collission for boxes
        //Yellow
        if (platform1.hitTestPoint(player.bottom()))
        {
            //stop player
            player.y--;
            player.vy = 0;
            gravity = 0;
            
            //if correct turn green and add to score
            //if wrong turn red and reset score
            if (Pweight == light)
            {
                //reset player position
                player.x = canvas.width / 2;
                player.y = 0 + player.height + player.height / 3;
                //randomize player weight again
                Pweight = ["light", "heavy"].sort(function() 
                {return 0.5 - Math.random();})[0];
                //win color
                player.color = "#E4D00A";
                //+1 score
                score = score +1
                //speed up
                gravity = gravity + 0.015

            }else if (Pweight == heavy) {
                player.color = "#DC143C";
            }
        }
        //Blue
        if (platform2.hitTestPoint(player.bottom()))
        {
            player.y--;
            player.vy = 0;
            gravity = 0;
            //if correct turn green and add to score
            //if wrong turn red and reset score

            if (Pweight == heavy)
            {
               //reset player position
               player.x = canvas.width / 2;
               player.y = 0 + player.height + player.height / 3;
               //randomize player weight again
               Pweight = ["light", "heavy"].sort(function() 
               {return 0.5 - Math.random();})[0];
               //win color
               player.color = "#E4D00A";
               //+1 score
               score = score +1
               //speed up
               gravity = gravity + 0.015

            }else if (Pweight == light) {
                player.color = "#DC143C";
            }
        }

        //Collission for bottom of screen
        if(player.y >= canvas.height -player.height/2)
        {
            player.y = canvas.height - player.height
            player.vy = -player.vy
            player.vy += gravity;
            player.y += player.vy;
            score = 0
        }
        //Draw Objects
        //player
        player.drawRect();
        //platforms
        platform1.drawRect();
        platform2.drawRect();
    }}

