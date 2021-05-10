//constant variable for width of each square
const w = 5;
function setup() {
  createCanvas(600, 400);
  noStroke()
  noLoop();
}
//used a for loop to create a pattern
function draw() {
  background("white");
      for (let i = 0; i < width; i += w*2) {
      for (let j = 0; j < height; j += w*2) {
//applied random variable for color of squares
      randFillR = random(255);
      randFillG = random(255);
      randFillB = random(255);
      fill(randFillR, randFillG, randFillB);
      square(i, j, w);
    }
  }
}