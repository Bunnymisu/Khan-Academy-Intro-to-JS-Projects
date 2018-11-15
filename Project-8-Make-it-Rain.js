//creates starting raindrops 
var xPositions = [200, 120, 180, 221];
var yPositions = [0, 130, 230, 143];

draw = function() {
    
    //draws backgrounds scenery 
    background(43, 46, 46);
    
    //background buildings
    fill(0, 0, 0);
    rect(194, 155, 145, 363, 0);
    rect(331, 212, 145, 363, 0);
    rect(56, 181, 145, 363, 0);
    rect(-12, 105, 145, 363, 0);
    
    //creates a moon
    fill(173, 173, 173);
    ellipse(320,73,62,61);
    fill(43, 46, 46);
    ellipse(302,70,56,53);
    
    //for loop that repeats raindrops 
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        
        //resets raindrop to top of screen
        if (yPositions[i] > 400)
        {
            yPositions[i] = 0;
        }
        
        //draws a raindrop
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 2, 10);
        yPositions[i] += (random(1, 20));
    }
    
    //draws the street 
    fill(89, 89, 89);
    rect(-35, 358, 571, 105, 0);
};
    
    //creates a new raindrop when mouse is clicked
    var mouseClicked = function()
    {
        xPositions.push(random(0, 400));
        yPositions.push(random(0, 400));
    };
