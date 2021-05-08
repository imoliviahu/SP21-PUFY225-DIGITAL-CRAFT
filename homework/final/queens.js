//constant variable for radius of circles
const r = 5; 
function setup() {
	createCanvas(500, 400);
	noStroke();
	noLoop();
}
//used a loop to create a pattern
function draw() {
  background("white");
		for (let i = 0; i < width; i += 10) {
	    for (let j = 0; j < height; j += 10) {
//applied random variable for color of circles
	    randFillR = random(255);
	    randFillG = random(255);
	    randFillB = random(255);
	    fill(randFillR, randFillG, randFillB);
	    circle(i, j, r);
    }
  }
}

