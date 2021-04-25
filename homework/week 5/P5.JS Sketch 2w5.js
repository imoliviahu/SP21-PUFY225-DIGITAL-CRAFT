//length and width for each rectangle
const w = 50; 
const l = 200;
function setup() {
//creates background
  createCanvas(windowWidth, windowHeight);
  randFillR = random(255)
  randFillG = random(255)
  randFillB = random(255)
  background(randFillR, randFillG, randFillB);
  noStroke();
  noLoop();
}

function draw() {
//creates grid of vertical rectangles
  for (let i = 0; i < width; i += 300) {
    for (let j = 0; j < height; j += 100) {
      fill("black");
      rect(i, j, l, w);
    }
  }
//creates grid of horizontal rectangles
  for (let x = 0; x < width; x += 100) {
    for (let y = 0; y < height; y += 100) {
      rect(x, y, w, l);
    }
  }
}