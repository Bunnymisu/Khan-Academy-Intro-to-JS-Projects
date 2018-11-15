//function that draws kirby
var Kirb = function(){
    strokeWeight(6);
    background(207, 254, 255);
    
    fill(255, 0, 0);
    textSize(30);
    text("", 10, 30);
    textSize(10);
    text("", 10, 87);
    
    //feet
    fill(224, 49, 113);
    bezier(190,281,206,326,-58,321,102,224); //left foot
    bezier(280,207,509,357,126,312,213,254); //right foot
    
    //shading
    fill(237, 133, 171);
    stroke(237, 133, 171);
    ellipse(75,261,18,14);
    ellipse(325,261,18,14);
    
    //body 
    stroke(0, 0, 0);
    fill(245, 164, 210);
    ellipse(203, 171, 228, 231);
    
    fill(204, 114, 167);
    arc(203,223,185,123,24,158);
    stroke(245, 164, 210);
    fill(245, 164, 210);
    ellipse(205,218,173,100);
    
    //eyes
    stroke(0, 0, 0);
    ellipse(166,125,26,60);
    ellipse(239,125,26,60);
    fill(0, 0, 0);
    fill(40, 107, 240);
    ellipse(166,126,25,60);
    ellipse(239,126,25,60);
    
    //pupil
    fill(0, 0, 0); 
    ellipse(166,120,22,39);
    ellipse(239,120,22,39);
    
    //eye glare
    stroke(255, 255, 255); 
    fill(255, 255, 255);
    ellipse(166,109,14,18);
    ellipse(239,109,14,18);
    
    //cheeks
    stroke(255, 87, 182);
    fill(255, 87, 182);
    ellipse(133,172,33,22);
    ellipse(275,172,33,22);
    
    //mouth
    fill(245, 164, 210);
    stroke(0, 0, 0);
    arc(203,125,67,100,68,114);
    
    //arms
    bezier(101,115,8,142,56,201,95,212); //left arm
    bezier(304,112,423,156,316,221,311,214); //right arm

};

//draws Kirby
Kirb();

//outputs the text 
fill(255, 148, 226);
textSize(46);
text("The Kirb vacuum", 15, 47);
textSize(24);
text("The unfillable sucking machine!", 21, 340);
text("only 99.99!",25,366);
