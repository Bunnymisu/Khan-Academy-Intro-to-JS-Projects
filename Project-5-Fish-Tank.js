background(89, 216, 255);
fill(150, 108, 108);
ellipse(202,487,626,270);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);

var Fish = function(bodyLength, bodyHeight, centerX, centerY)
{
noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

Fish(148, 87, 233, 196);

mouseClicked = function()
{
    bodyColor = color(mouseY, mouseX, mouseY);
    Fish(132, 75, mouseX, mouseY);    
};
