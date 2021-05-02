const r = 5;
function setup() {
  createCanvas(600, 400);
  noStroke()
  noLoop();
}

function draw() {
  background("white");
      for (let i = 0; i < width; i += 10) {
      for (let j = 0; j < height; j += 10) {
      randFillR = random(255);
      randFillG = random(255);
      randFillB = random(255);
      fill(randFillR, randFillG, randFillB);
      circle(i, j, r);
    }
  }
}