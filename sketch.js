var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255); 
  hr = hour()
  mn = minute()
  sc = second()

  angleMode(DEGREES) 

  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(sc, 0, 60, 0, 360)
  hrAngle = map(sc, 0, 12, 0, 360)




  
  push()
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,100)
  pop()
  
  

  drawSprites();
}