background(219, 255, 255);

//creates a single cloud
stroke(255, 255, 255);
ellipse (287, 58, 39, 39);
ellipse (313, 79, 62, 61);
ellipse (269, 88, 84, 73);

//draws the roof of the main house
stroke(0, 0, 0);
fill(174, 180, 214);
triangle(136, 29, 274, 171, -5, 170);

//main body of the house
fill(255, 255, 255);
rect(14, 170, 241, 187);

//for loop used to double up the doors and doorknobs 
for (var i = 0; i < 2; i++)
{
    //draws the door frames
    fill(120, 80, 19);
    rect(i * 40 + 97, 280, 40, 77);
    
    //draws the doorknobs
    fill(255, 204, 0);
    ellipse(i * 21 + 127, 320, 10, 10);
}

//for loop used to create main house' windows
for (var j = 0; j < 2; j++)
{
    //draws the two windows twice 
    fill(252, 194, 194);
    rect(j * 40 + 164, 202, 40, 48);
    rect(j * 40 + 29, 202, 40, 48);
}

//draws out the side garage of the main house
fill(255, 255, 255);
rect(255, 236, 168, 121, 0);
fill(0, 0, 0);
rect(275, 296, 116, 61, 0);

//creates the grassy terrain 
fill(140, 255, 102);
rect(-7, 357, 500, 56, 0);
