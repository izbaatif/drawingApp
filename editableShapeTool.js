function editableShapeTool(){
	//set an icon and a name for the object
	this.icon = "assets/editableShapeTool.png";
	this.name = "editableShapeTool";
    
    var editButton;
    var finishButton;

    var editMode=false;
    var currentShape=[]

this.setup=function()
{
    noFill();
    loadPixels();
}

this.draw=function()
{
     
    //to store pixels
    updatePixels();

    //adds point to array when mouse is pressed  when edit mode is false 
    //when its true checks if distance of each point in array is less than 15 pixels
    if(mousePressOnCanvas(c) && mouseIsPressed)
        {
            if(!editMode)
                {
                    currentShape.push({x:mouseX, y:mouseY})
                }
            else
                {
                    for(var i=0; i<currentShape.length; i++)
                        {
                            if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY)<15)
                                {
                                    currentShape[i].x=mouseX
                                    currentShape[i].y=mouseY
                                }
                        }
                }
            
            
        }

        /*---Deletes vertices when del button is clicked--*/
        if(editMode)
        {
            document.getElementById("text").innerHTML="Click on the circle and press delete to remove vertex"
            for(var i=0; i<currentShape.length; i++) {
                if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY)<15)
                    {
                        if(keyIsPressed && keyCode==46){
                            currentShape.splice(i, 1)
                        }
                    }
            }

        }
        
    
    // draws shape on screen from each point in array when edit mode is false
    //draws circles on points is edit mode is true
    beginShape()
    for(var i=0; i<currentShape.length; i++)
        {
            vertex(currentShape[i].x, currentShape[i].y)
            if(editMode)
                {
                    fill(0);
                    ellipse(currentShape[i].x, currentShape[i].y,5,5)

                }
             noFill();
        }
    endShape()

}

//makes sure that the mouse is pressed on the canvas
function mousePressOnCanvas(canvas)
{
    if(mouseX>canvas.elt.offsetLeft && mouseX < (canvas.elt.offsetLeft+ canvas.width) && mouseY>canvas.elt.offsetTop && mouseY<(canvas.elt.offsetTop + canvas.height - 30 ))
        {
            return true
        }
    return false;
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
        select(".options").html("<button id='editButton'> Edit Shape</button>  <button id='finishButton'> Finish Shape</button> <div id='text'> </div>");
	    
        //when button is clicked and button value changes
		select("#editButton").mouseClicked(function()
        {
            var button = select("#" + this.elt.id)
            if(editMode)
                {
                    editMode=false;
                    button.html('Edit Shape');
                }
            else
                {
                    editMode=true;
                    button.html('Add Vertices');
                }
            
        })
        
        //finish button function when clicked
        select("#finishButton").mouseClicked(function()
          {
            editMode=false
            draw();
            loadPixels();
            currentShape=[]
            
          })
    }
}
