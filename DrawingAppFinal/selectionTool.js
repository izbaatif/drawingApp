function selectionTool(){
this.icon = "assets/selectionTool.jpg";
this.name = "selectionTool";

var selectMode;
var selectedArea;

var selectedPixels;
var selectButton;

this.setup=function()
{

    selectMode = 0;
	selectedArea = {x: 0, y:0, w: 100, h: 100};

	selectButton = createButton('Select Area');

	selectButton.parent('#selectButtonArea')
    
    selectButton.mousePressed(function()
    {
        //event code will go here
		
		if(selectMode == 0)
		{
			selectMode += 1;
			selectButton.html("Reposition");

			loadPixels(); // store current frame
		}
		else if(selectMode == 1)
		{
			selectMode += 1;
			selectButton.html("Deselect");
			
			//refresh the screen
			updatePixels();
		
			//store the pixels
			selectedPixels = get(selectedArea.x , selectedArea.y , selectedArea.w, selectedArea.h);
            
		}
		else if(selectMode == 2)
		{
			selectMode = 0;
			selectedArea = {x: 0, y: 0, w: 100, h:100};
			selectButton.html("Select Area");
		}
    });

	
}

this.draw=function()
{
     
    if(mouseIsPressed)
    {
        
		
		if (selectMode == 1)
		    {
			    updatePixels();
			
				push();

			    noStroke();
			    fill(255,0,0,100);
			    rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);

				pop();
            }
	}
}


this.mousePressed=function(){
	if(selectMode == 1)
	{
		selectedArea.x = mouseX;
		selectedArea.y = mouseY;
	}
}

this.mouseDragged=function(){

	if(selectMode == 1)
	        {
		        var w = mouseX - selectedArea.x;
		        var h = mouseY - selectedArea.y;

		        selectedArea.w = w;
		        selectedArea.h = h;

	        }

    if(selectMode == 2)
	        {
		        updatePixels();

				push();

		        fill(255);
		        noStroke();
		        rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);

				pop();
		
		        image(selectedPixels, mouseX, mouseY);
	    	}

}


// clears populate options when tool is unselected
this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
}



this.populateOptions = function()
    {
        //draws the buttons
        select(".options").html("<div id='selectButtonArea'> </div>");
	    


    }

}