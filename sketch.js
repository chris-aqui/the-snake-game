
console.log("loaded sketch");
let s; // snake
let scl = 20; // snake size

let food;

function setup () {
  console.log("setup canvas");
  // define the canvas size.
  // createCanvas(600, 600);
  var canvas = createCanvas(600, 600);
  // canvas();
  canvas.parent('p5-container');

  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation () {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed () {
  s.total++;
}

function draw () {
  console.log('drawing canvus')
  //  background color
  // canvas.parent('p5-container');
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}


function keyPressed () {
  // control the snake direction
  if (keyCode === UP_ARROW) {
    s.dir(0, -1); //(x , y)
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1); //(x , y)
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0); //(x , y)
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0); //(x , y)
  }
}
