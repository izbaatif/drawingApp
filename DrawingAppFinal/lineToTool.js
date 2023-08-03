function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	//mouse position at start 
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//used to draw line
	this.draw = function(){

		//draws onto screen when mouse is clicked
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				
				//saves the position of the line which is created previously
				loadPixels();
			}

			else{				
				// prevents multiple lines being made
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		//puts mouse position to default after saving the previous pixels of line
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
