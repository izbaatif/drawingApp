function textTool(){
	this.icon = "assets/textTool.jpg";
	this.name = "textTool";

    //initial font and font size
    var fontsize=20;
    var fontsel="Arial";

    //starting x and y poitions when typing
    var startMouseX;
    var startMouseY;

    //empty arrays so keys can be pushed in it
    var textArray=[]

    var spacing;
    var v=1;

    this.setup=function(){

        //dropdown for font size
        sel = createSelect();
        sel.parent('#dropdownSize');
        sel.option('12');
        sel.option('14');
        sel.option('16');
        sel.option('18');
        sel.option('20');
        sel.option('22');
        sel.option('24');
        sel.option('28');
        sel.option('30');
        sel.option('32');
        sel.option('34');
        sel.option('36');
        sel.option('38');
        sel.option('40');
        sel.selected('20');
        sel.changed(dropdownEvent1);

        //dropdown for font
        selFont = createSelect();
        selFont.parent('#fontSelected');
        selFont.option('Arial');
        selFont.option('New Times Roman');
        selFont.selected('Arial');
        selFont.changed(dropdownEvent1);
    }

    //runs when dropdown option is chosen
    function dropdownEvent1() {
        fontsize= sel.value();
        fontsel=selFont.value();
    }

    

    this.draw=function(){

        

        //makes sure mouse is pressed on canvas
        function mousePressOnCanvas(canvas)
        {
            if(mouseX>canvas.elt.offsetLeft && mouseX < (canvas.elt.offsetLeft+ canvas.width) && mouseY>canvas.elt.offsetTop && mouseY<(canvas.elt.offsetTop + canvas.height - 30 ))
            {
                return true
            }
            return false;
        }
        //sets properties when mouse is clicked on canvas
        if(mouseIsPressed && mousePressOnCanvas(c))
        {
            startMouseX=mouseX;
            startMouseY=mouseY;
            textArray=[]
            v=1;
            spacing=1;
        }
        
    }

    //runs when key is pressed
    this.keyPressed=function(){

        //resets everything when enter is pressed
        if(keyCode==6)
        {
             startMouseX=mouseX;
             startMouseY=mouseY;
             textArray=[]
             v=1;
             spacing=1;
        }

        //only adds elements when keys are space, alphabets, numbers or . , etc
        if(keyCode>46 || keyCode==32)
         {
             textArray[1]=key
         }
        

         //loop to type elements of array onto screen
        for(var i=1; i<textArray.length; i++)
         {
             textSize(fontsize);
             textFont(fontsel)
             if(keyCode>46 || keyCode==32){
                 text(textArray[1], startMouseX + spacing , startMouseY);
             }
             

             push()
             //draws a rectangle over the previous typed character when backspace is pressed
             if(keyCode==8)
             {
                 noStroke();
                 fill(255)
                 rect(startMouseX + spacing - fontsize , startMouseY -fontsize, fontsize, fontsize*2);
                 
                 spacing=spacing-fontsize
                 v = v-1
             }

             //doesnt change spacing when keys arent characters required
             else if(keyCode<=46 && keyCode!=32)
             {
                 spacing=spacing
             }

             //multiplies spacing by v each time
             else{
                 spacing= v * fontsize
                 v = v+ 1;
             }

             pop()
             
         }
         
        
    }

   
    
    this.unselectTool = function() {
		//clear options
		select(".options").html("");
    };
    
    this.populateOptions = function()
    {
        //html divs
		select(".options").html("<div id='dropdownSize'> Font Size </div> <div id='fontSelected'> Font: </div>" );
    }

    
}
