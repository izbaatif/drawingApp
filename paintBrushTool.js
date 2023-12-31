function paintBrushTool(){
	//set an icon and a name for the object
	this.icon = "assets/paintBrushTool.jfif";
	this.name = "paintBrush";
    
	var strokeSize;
    strokeSize=8;

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                strokeWeight(strokeSize)
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};

	
    
    this.unselectTool = function() {
		//clear options
		select(".options").html("");
		strokeWeight(1);
        };
    
    this.populateOptions = function()
    {
		//html buttons
		select(".options").html("<div id='strokeSize'> Brush Size: </div> <button id='increaseSize'> + </button> <button id='decreaseSize'>-</button> <div id='current'> </div>");
	
		//function when + button is pressed
		select("#increaseSize").mouseClicked(function()
        {
            strokeSize+=1;
			//Doesn't allow size to go above 20
            if(strokeSize>=20)
            {
                strokeSize=20;
            }


			//function when - button is pressed
            document.getElementById("current").innerHTML=  "Current Size: " + strokeSize
            return;
            
        })

        select("#decreaseSize").mouseClicked(function()
        {
            strokeSize-=1;
			//Doesn't allow size to go below 4
            if(strokeSize<=4)
            {
                strokeSize=4;
            }
            document.getElementById("current").innerHTML=  "Current Size: " +  strokeSize
            return;
            
        })
        document.getElementById("current").innerHTML=  "Current Size: " +  strokeSize
        
        
    }
}