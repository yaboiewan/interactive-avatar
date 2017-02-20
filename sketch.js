/**
* Ewan Creed <ec8725@bard.edu>
* Feb 20 2017
* IDEA 135
* Sketch 6: Interactive Avatar
* Collaboration Statement: I worked alone on this assignment with assistance from the reference site for p5.js (https://p5js.org/reference/). I also watched tutorial videos from "The Coding Train" on youtube (https://www.youtube.com/watch?v=NcCEzzd9BGE)
*This sketch is different from my previous sketch since it has now been animated. My avatar now, if executed correctly, performs a trick known in the skateboarding vocabulary as an "Ollie", onto a ledge.
Although I’m not sure myself which of Victor’s four different types of dynamic pictures my sketch falls under, it seems to resemble both a dynamic image and an interactive image. 
It falls under the category of a dynamic image because my image appears to move only after clicking buttons; It is not constantly in motion. 
However, my image is somewhat interactive as well, since a user can decide how quickly my avatar performs the trick through clicking the arrow keys at different rates. 
This makes me think about how some of Victor’s categories overlap, and question whether or not this overlap sparks controversy within his definitions. 
In terms of technicality in creating this sketch, I struggled to align my avatar properly, in order to make it seem like he was doing a skate trick. 
I had to constantly go back and forth from my previous sketch to my new one to make sure that the coordinates lined up.  

*/

var bgcolor;

function setup() {
    createCanvas(1000, 700);
    bgcolor=color(200);
}

function mousePressed(){bgcolor = color(random(100,50,255))}

function draw() {
    background(bgcolor);
  
    stroke(255);
    strokeWeight(4);
    

    if (keyIsPressed && keyCode === RIGHT_ARROW){ 
        //flat part of board
        line(600, 350, 400, 350);
        fill(300,200,300);
    //left part of board
        line(400, 350, 370, 330);
        fill(200,100,200);
    //right part of board
        line(600,350, 630, 330);
    //left wheel
        ellipse(425,361,20,20);
    //right wheel
        ellipse(575,361,20,20);
    //body
        line(500,300,500,100);
    //left leg
        line(425,350,500,300);
    //right leg
        line(575,350,500,300);
    //head
        ellipse(500,88,70,65);
        fill(100,400,100);
    // left eye
        ellipse(490,80,10,10);
    // right eye
        ellipse(510,80,10,10);
    //mouth
        line(510,100,490,100);
    //left arm
        line(400,170,499,230);
    //right arm
        line(600,170,500,230);
        rect(380,375,300, 30);
    }
   
      if (keyIsPressed && keyCode === UP_ARROW)
    {noFill();
        //flat part of board
        line(600, 400, 400, 400);
        fill(300,200,300);
    //left part of board
        line(400, 400, 370, 380);
        fill(200,100,200);
    //right part of board
        line(600,400, 630, 380);
    //left wheel
        ellipse(425,410,20,20);
    //right wheel
        ellipse(575,410,20,20);
    //body
        line(500,350,500,150);
    //left leg
        line(425,400,500,350);
    //right leg
        line(575,400,500,350);
    //head
        ellipse(500,118,70,65);
        fill(100,400,100);
    // left eye
        ellipse(490,110,10,10);
    // right eye
        ellipse(510,110,10,10);
    //mouth
        line(510,130,490,130);
    //left arm
        line(400,200,499,250);
    //right arm
        line(600,200,500,250);
       rect(680,375,300, 30)}
 
   fill(0, 255, 0);
    textSize(32);
    text("gNaRlYbRuH", mouseX, mouseY);
    textSize(24);
 
  print(mouseIsPressed);
    
if (keyIsPressed && keyCode === DOWN_ARROW){//flat part of board
        line(600, 330, 405, 380);
        fill(300,200,300);
   
    //left part of board
        line(405, 380, 370, 380);
        fill(200,100,200);
  
    
    //right part of board
        line(600,330, 630, 310);
    
    //left wheel
        ellipse(425,385,20,20);
    
    //right wheel
        ellipse(575,348,20,20);
    
    //left leg
        line(433,370,500,300);
    //right leg
        line(575,335,500,300);
    //body
        line(500,300,450,100);
     //head
        ellipse(442,70,70,65);
        fill(100,400,100);
   // left eye
        ellipse(429,63,10,10);
    // right eye
        ellipse(450,58,10,10);
    //mouth
        line(435,80,455,75);
    //left arm
        line(360,190,475,200);
     //right arm
        line(580,140,475,200);
    rect(570,375,300, 30);
}
  
    }
