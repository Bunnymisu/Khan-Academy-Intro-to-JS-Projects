//Draws the 8-ball and shades it 
fill(15, 15, 15);
ellipse(205, 200, 375, 375);
fill(69, 69, 69);
triangle(200, 127, 276, 253, 130, 253);
ellipse(129,199,223,300);

//draws 8-ball symbol
fill(255, 255, 255);
arc(206,60,211,-95,12,380);
strokeWeight(8);
bezier(250,21,221,61,168,27,170,18);

//draws message frame
fill(0, 0, 0);
ellipse(202,204,190,188);

//side shading
strokeWeight(1);
fill(87, 87, 87);
quad(273,112,271,118,298,158,312,128);
quad(325,182,305,212,302,161,317,129);
var answer = floor(random(1, 5));

//messages for each random number 
if(answer === 1)
{
    //draws triangle inside ball and message 
    fill(39, 55, 74);
    triangle(200, 127, 276, 253, 130, 253);
    fill(255, 255, 255);
    text("MAYBE", 181, 200);
    text("NOT", 189, 218); 
}

else if(answer === 2)
{
    fill(28, 86, 153);
    triangle(200, 127, 276, 253, 130, 253);
    fill(255, 255, 255);
    text("NO",191,217);
}

else if(answer === 3)
{
    fill(87, 165, 255);
    triangle(200, 127, 276, 253, 130, 253);
    fill(255, 255, 255);
    text("YES",189,217);
}

else if(answer === 4)
{
    fill(0, 115, 255);
    triangle(200, 127, 276, 253, 130, 253);
    fill(255, 255, 255);
    text("ASK AGAIN",168,209);
    text("LATER",181,223);
}
