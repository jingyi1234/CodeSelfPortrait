//Code Self Potrait by Jingyi Zhao
//P5.js Skeetch for drawing

//Global
var gDebugMode = true; 

// Setup code goes here
function setup() {
  createCanvas(1000, 600);
  ellipseMode(CENTER);
  textSize(20);
  textAlign(LEFT);  
 }

// Draw code goes here
function draw() {
  background(255,140,0);

  fill(169,169,169)
  ellipse(300,250,50,260);
  ellipse(275,250,50,260);
  ellipse(247,265,50,250);
  ellipse(325,250,50,260);
  ellipse(353,265,50,250);

//Head
  fill(255,248,220);
  ellipse(300,200,125,150);

//eye
fill(50);
ellipse(268,200,30,27);
ellipse(332,200,30,27);
fill(255);
ellipse(270,200,10,10);
ellipse(334,200,10,10);

//mouth
fill(50);
arc(300,245,40,30.0);
fill(255,160,122);
arc(300,257,25,23,PI,0,PIE);
arc(300,257,23,7,0,PI,PIE);

//blush
fill(245,245,245);
ellipse(268,225,30,10);
ellipse(334,225,30,10);

//ear
fill(255,160,122);
arc(239,200,32,32,PI/2,3*PI/2);
arc(360,200,32,32,-PI/2,PI/2);

 //neck
 fill(255,248,220);
 rect(290,275,20,50,10);

 //clothes
 fill(230,230,250);
 stroke(173,255,47);
 quad(285,285,255,290,230,385,265,395);
 quad(315,285,345,290,370,385,325,395);
 fill(106,90,205);
 quad(285,285,250,430,350,430,315,285);
 
 //hair
  noStroke();
  fill(105,105,105);
  arc(300, 178, 140,130, PI, 0);
  fill(255,248, 220);
  triangle(295,178,305,178,300,155);
  triangle(255,178,265,178,265,160);

//hands
   fill(128,128,0);
   ellipse(245,389,20,20);
   ellipse(354,388,20,20);


  //feet
  fill(0,0,0);
  rect(280,427,20,50,10);
  rect(319,427,20,50,10);

if( gDebugMode == true) {
	drawDebugInfo();
  }
}
//X, Y
function drawDebugInfo() {
	fill(255);
	text("X: " + mouseX + " Y: " + mouseY, 20, height - 20);
}
//key typed
function keyTyped() {
	if ( key === '') {
		gDebugMode = !gDebugMode;
	}
}


