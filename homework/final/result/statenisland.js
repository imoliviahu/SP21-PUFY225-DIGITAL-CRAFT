//constant variable for radius of circles
const w = 5;
function setup(){
	createCanvas(400, 400);
	noStroke();
	noLoop();
}
//used a loop to create a pattern
function draw(){
  background("white");
      for (let i = 0; i < width; i += w*2) {
      for (let j = 0; j < height; j += w*2) {
//applied random variable for color of circles
      randFillR = random(255);
      randFillG = random(255);
      randFillB = random(255);
      fill(randFillR, randFillG, randFillB);
      square(i, j, w);
    }
  }
}