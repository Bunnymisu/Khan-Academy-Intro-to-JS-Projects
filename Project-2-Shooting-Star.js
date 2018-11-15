//variables for controlling star's position
var xPos = 13;
var yPos = 9;
var xPos2 = -14;
var yPos2 = 15;

//draws and changes the position of the star
draw = function() {
    background(29, 40, 115);
    xPos +=2;
    yPos +=0.67;
    xPos2 += 4;
    yPos2 +=0.78;
   
    //draws the ground
    fill(53, 92, 27);
    ellipse(201,446,493,256);
    
    //draws the first star
    fill(224, 255, 51);
    ellipse(xPos2, yPos2, 10, 10);
    
    //draws the second star
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
};
