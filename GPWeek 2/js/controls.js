//Define Booleans for each key
var a = false;
var d = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	
	
	if(e.keyCode == 83)
	{
		w = true;
	}
	if(e.keyCode == 87)
	{
		s = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	
	if(e.keyCode == 83)
	{
		w = false;
	}
	if(e.keyCode == 87)
	{
		s = false;
	}
}
