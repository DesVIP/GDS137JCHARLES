/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:100});
startButton.img.src="images/Bigger Button.png"
//startButton.width=200;
//startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/Menu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play("The Forbidden Forest.mp3"),0,true
		}

		//Hover Effect Graffic
		startButton.color = `green`
		startButton.img.src='images/Bigger Button Hover.png'
	}
	else
	{
		//Default Button Graphic
		startButton.color = `purple`
		startButton.img.src="images/Bigger Button.png"

	}
	
	menuBackground.drawStaticImage();
	startButton.render()
	startButton.drawStaticImage()
}
	
	
