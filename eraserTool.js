function eraserTool(){
	this.icon = "assets/eraserTool.jpg";
	this.name = "eraserTool";
    
    
    var SizeofEraser;
    SizeofEraser=12
    
    
    this.draw = function() {
        //if the mouse is pressed paints white on the canvas
        
        push();
        if(mouseIsPressed)
        {
                this.selectedcolor="white"
                fill(this.selectedcolor)
                noStroke();
                rect(mouseX, mouseY, SizeofEraser, SizeofEraser);
        }
        pop();
        
    }
    
    this.unselectTool = function() {
		//clear options
		select(".options").html("");
    }
    
    this.populateOptions = function()
    {
        //html buttons
		select(".options").html("<div id='eraserSize'> Eraser Size: </div> <button id='increaseSize'> + </button>  <button id='decreaseSize'>-</button> <div id='current'>  </div>");
	    
        //function when + button is pressed
		select("#increaseSize").mouseClicked(function()
        {
            SizeofEraser+=2;
            //Doesn't allow size to go above 50
            if(SizeofEraser>=50)
            {
                SizeofEraser=50;
            }

            document.getElementById("current").innerHTML="Current Size: " + SizeofEraser
            return;
            
        })

        //function when - button is pressed
        select("#decreaseSize").mouseClicked(function()
        {
            SizeofEraser-=2;

            //Doesn't allow size to go below 4
            if(SizeofEraser<=4)
            {
                SizeofEraser=4;
            }
            document.getElementById("current").innerHTML="Current Size: " + SizeofEraser
            return;
            
        })
        document.getElementById("current").innerHTML="Current Size: " + SizeofEraser
        
        
    }
    
    
    
  
    
}

	

