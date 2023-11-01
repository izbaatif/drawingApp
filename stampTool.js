function stampTool(){
	this.icon = "assets/stampTool.jpg";
	this.name = "stampTool";


var shapeSizeSlider;
var shapeNumberSlider;
var shapeSelected;

    
shapeSelected=fireImg


this.setup=function()
{
    //creates sliders and set their parents

    shapeSizeSlider= createSlider(5,50,20);
    shapeSizeSlider.parent('#sizeOfShapeControl');
    shapeNumberSlider=createSlider(1, 20 ,5);
    shapeNumberSlider.parent('#numberOfShapeControl');
                     
}

this.draw=function()
{
   //draws image when mouse is pressed
   //sets the location randomly between -10 and +10 px of mouse location
   //draws the number of times selected on slider

    if(mouseIsPressed)
        {
            for(var i=0; i< shapeNumberSlider.value(); i++)
                {
                     var shapeSize= shapeSizeSlider.value();
                     var shapeX= random((mouseX-shapeSize/2)-10, (mouseX-shapeSize/2)+10);
                     var shapeY= random((mouseY-shapeSize/2)-10, (mouseY-shapeSize/2)+10);
                     image(shapeSelected, shapeX, shapeY, shapeSize, shapeSize);
                }
        }
  
}

this.unselectTool = function() {
		//clear options
		select(".options").html("");
        };


this.populateOptions = function()
    {
        //draws image buttons
		select(".options").html("<div id='numberOfShapeControl'>Number of Shape: </div> <div id='sizeOfShapeControl'> Size of Shape: </div> <div id='Shape'>Shape: </div> <input type='image' src='assets/fire.png' id='fire' width='40' height='40' alt='fire'>   <input type='image' src='assets/smile.png' id='smile' width='40' height='40' alt='smile'>   <input type='image' src='assets/sad.png' id='sad' width='60' height='50' alt='sad'>   <input type='image' src='assets/laugh.png' id='laugh' width='40' height='40' alt='laugh'>   <input type='image' src='assets/heart.png' id='heart' width='40' height='40' alt='heart'>  <input type='image' src='assets/star.png' id='star' width='40' height='40' alt='star'>")
        
        //buttons functionality
        select("#fire").mouseClicked(function()
        {
            shapeSelected=fireImg

        }) 
        
        select("#smile").mouseClicked(function()
        {
            shapeSelected=smileImg
            
        }) 

        select("#sad").mouseClicked(function()
        {
            shapeSelected=sadImg
            
        }) 

        select("#laugh").mouseClicked(function()
        {
            shapeSelected=laughImg
            
        }) 

        select("#heart").mouseClicked(function()
        {
            shapeSelected=heartImg
            
        }) 

        select("#star").mouseClicked(function()
        {
            shapeSelected=starImg
            
        }) 
    }
}