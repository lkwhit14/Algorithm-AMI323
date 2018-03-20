var a=1;
var bugs = [];
var gray = 125
var b = 0;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (var i=0; i<150; i++) {
    bugs.push(new Jitter());
  }
  background(250);
}

/// the word displays depends on value of a (1 initially, then changes)///
function draw(){
  orbitControl();
  normalMaterial();
  
  gray = 125 + (125*sin(b));
  b=b+.03;

  if(keyIsPressed==true){
    background(250);
    if (a==1) {
      DrawWho();
    } else if (a==2) {
      DrawAre();
    } else if (a==3) {
      DrawYou();
    }
  } else {
      background(gray);
      DrawChaos();
  }
}

/// next keypress will yield a different word///
function keyReleased() {
  if(a==1) {
    a = random(2);
    if(a<1) {
      a=2
    } else {
      a=3
    }
  } else if(a==2) {
    a = random(2);
      if(a<1) {
        a=1
      } else {
        a=3
      }
  } else if(a==3) {
    a = random(2);
    if(a<1) {
      a=1
    } else {
      a=2
    }
  }
}

/// ARRAY FOR RANDOM BLOCKS ///
function DrawChaos() {
  for (var i=0; i<bugs.length; i++) {
    bugs[i].display();
  }
}

function Jitter() {
  this.x = random(10, 50);
  this.y = random(10, 50);
  this.z = random(10, 50);
  this.leftright = random(-350,350);
  this.updown = random(-250,250);
  this.inout = random(-250,250);
  this.spin = random(.01,.015)

  this.display = function() {
    push();
    translate(this.leftright, this.updown, this.inout)
    rotateZ(frameCount * this.spin);
    rotateX(frameCount * this.spin);
    rotateY(frameCount * this.spin);
    box(this.x, this.y, this.z);
    pop();
  }
}

/// WHO ARE YOU FUNCTIONS///
function DrawWho() {
  ///WHO///
  /// W ///
  translate(-200,0,0)
  push();
  rotateY(frameCount * 0.01);
  box(20,90,20);
  pop();

  translate(20,0,0)
  push();
  rotateZ(.52);
  box(20,90,20);
  pop();

  translate(35,0,0)
  push();
  rotateZ(2.61);
  box(20,90,20);
  pop();

  translate(20,0,0)
  push();
  rotateY(frameCount * 0.01);
  box(20,90,20);
  pop();
  
  /// H ///
  translate(60,0,0)
  push();
  rotateY(frameCount * 0.01);
  box(20,90,20);
  pop();
  
  translate(30, 0, 0)
  push();
  rotateX(frameCount * 0.01);
  box(60, 20, 20);
  pop();
  
  translate(30, 0, 0);
  push();
  rotateY(frameCount * 0.01);
  box(20,90,20);
  pop();
  
  /// O ///
  translate(75, 0, 0)
  push();
  rotateY(frameCount * .01)
  torus(40, 10);
  pop();    
}

function DrawAre() {
  /// ARE ///
  /// A ///
  translate(-200,0,0)
  push();
  rotateZ(frameCount * 0.01)
  torus(35, 10);
  pop();

  translate(35, 0, 0)
  push();
  rotateY(frameCount * .01)
  box(20,90,20);
  pop();

  /// R ///
  translate(45,0,0)
  push();
  rotateY(frameCount * .01)
  box(20,90,20)
  pop();

  translate(25, -25, 0)
  push();
  rotateZ(2.36)
  box(15, 45, 10)
  pop();

  translate(0, 20, 0)
  push();
  rotateZ(.79)
  box(15, 45, 10)
  pop();

  translate(5,25,0)
  push();
  rotateZ(2.36)
  box(15, 50, 10)
  pop();

  /// E ///
  translate(45, -20, 0);
  push();
  rotateY(frameCount * 0.01);
  box(20,90,20);
  pop();

  translate(30,0,0)
  push();
  rotateX(frameCount * 0.01);
  box(60, 20, 20);
  pop();

  translate(0, 35, 0)
  push();
  rotateX(frameCount * 0.01);
  box(60, 20, 20);
  pop();

  translate(0, -70, 0)
  push();
  rotateX(frameCount * 0.01);
  box(60, 20, 20);
  pop();    
}

function DrawYou() {
  /// YOU ///
  /// Y ///
  translate(-200, 0, 0)
  push();
  rotateZ(2.61)
  box(20, 45, 20)
  pop();

  translate(20,20,0)
  push();
  rotateZ(.52)
  box(20,90,20)
  pop();

  /// O ///
  translate(65, 0, 0)
  push();
  rotateZ(frameCount * .01)
  torus(40, 10);
  pop();

  /// U ///
  translate(65,0,0)
  push();
  rotateY(frameCount * .01)
  box(20,90,20)
  pop();

  translate(20,35,0)
  push();
  rotateX(frameCount * .01)
  box(60,20,20)
  pop();

  translate(20,-35,0)
  push();
  rotateY(frameCount * .01)
  box(20,90,20)
  pop();
}