//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var starImg;
var smileImg;
var sadImg;
var fireImg;
var heartImg;
var laughImg;
var c;

var mouseIsDragged



//Preloads images
function preload()
{
    starImg=loadImage('assets/star.png');
    smileImg=loadImage('assets/smile.png');
    sadImg=loadImage('assets/sad.png');
    heartImg=loadImage('assets/heart.png');
    fireImg=loadImage('assets/fire.png');
    laughImg=loadImage('assets/laugh.png');
}



function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");
    

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new MirrorDrawTool());
	toolbox.addTool(new shapesTool());
    toolbox.addTool(new stampTool());
	toolbox.addTool(new editableShapeTool());
	toolbox.addTool(new selectionTool());
	toolbox.addTool(new textTool());
    toolbox.addTool(new eraserTool());
    toolbox.addTool(new paintBrushTool());
	
    
	background(255);


}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();

	} else {
		alert("it doesn't look like your tool has a draw method!");
	}

}

function keyPressed() {
	//call the keyPressed function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	if (toolbox.selectedTool.hasOwnProperty("keyPressed")) {
		toolbox.selectedTool.keyPressed();

	} 

}

function mousePressed() {
	//call the mousePressed function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	if (toolbox.selectedTool.hasOwnProperty("mousePressed")) {
		toolbox.selectedTool.mousePressed();

	} 

}

function mouseDragged(){
	//call the mouseDragged function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	if (toolbox.selectedTool.hasOwnProperty("mouseDragged")) {
		toolbox.selectedTool.mouseDragged();

	}
	
}



