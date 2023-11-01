function shapesTool(){
	this.icon = "assets/rectangleTool.jpg";
	this.name = "shapesTool";

	//mouse position at start 
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    var shapeSelected;

    this.setup=function(){
        sel = createSelect();
        sel.parent('#dropdownShape');
        sel.option('...');
        sel.option('rectangle');
        sel.option('ellipse');
        sel.option('triangle');
        sel.selected('...');
        sel.changed(dropdownEvent);
    }

    function dropdownEvent() {
        shapeSelected= sel.value();
    }

	this.draw = function(){

		//draws onto screen when mouse is clicked
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				
				//saves the position of the rectangle which is created previously
				loadPixels();
			}

			else if(shapeSelected=="rectangle"){				
				// prevents multiple rectangle being made
				updatePixels();
				rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
			}

            else if (shapeSelected=="ellipse"){				
				// prevents multiple ellipses being made
				updatePixels();
				ellipse(startMouseX, startMouseY , (mouseX-startMouseX)*2, (mouseY-startMouseY)*2 );
			}

            else if (shapeSelected=="triangle")
            {
                // prevents multiple triangle being made
				updatePixels();
				triangle(startMouseX , startMouseY , mouseX , mouseY , startMouseX- (mouseX - startMouseX), mouseY);
            }

		}

		//puts mouse position to default after saving the previous pixels of rectangle
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	}



    this.unselectTool = function() {
		//clear options
		select(".options").html("");
    };
    
    this.populateOptions = function()
    {
        //html div 
		select(".options").html("<div id='dropdownShape'> Shape: </div>");
    }
	    
        
}
