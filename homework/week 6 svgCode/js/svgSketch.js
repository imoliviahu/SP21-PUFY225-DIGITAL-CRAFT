function setup() {
  createCanvas(800, 800, SVG); // Create SVG Canvas
  noStroke();
  colorMode(HSB);
  noLoop();
}

function draw() {
  background("white");
      for (let i = 0; i < width; i += 10) {
      for (let j = 0; j < height; j += 10) {
//applied random variable for color of circles
      randFillR = random(255);
      randFillG = random(255);
      randFillB = random(255);
      fill(randFillR, randFillG, randFillB);
      rect(i, j, 5, 5);
    }
  }
  //   when you're ready to export the sketch uncomment the save() function and reload the sketch
   save();
}
