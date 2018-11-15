//controlls body proportion        
var bodyX = 200;
var bodyY = 220;
var bodyW = 113;
var bodyH = 113;


//draws the creature
draw = function() {
    bodyW +=1;
    bodyH +=1;
    
    //draws the background
    background(207, 254, 255);
    
    //draws the face and body
    fill(252, 252, 252);
    ellipse(bodyX, bodyY-70, 3, 58); // face?
     ellipse(bodyX, bodyY, bodyW, bodyH); // body?
    
    //draws the nose and antennae
    fill(255, 0, 0);
    ellipse(200,109,48,51);
    
    ellipse(199,241,54,-40);
    
    //draws the eyes
    fill(0, 0, 0);
    ellipse(162,204,18,17);
    ellipse(235,204,18,17);
};
