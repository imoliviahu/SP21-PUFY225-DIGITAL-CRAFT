//values for different stroke weights
const d = 50;
const m = 5;
const s = 25;
function setup(){
	createCanvas(600, 900);
	noLoop();
}
function draw(){
	background("#ECF6F9");
	lines();
}
//creates lines
function lines(){
//sets stroke weight, location, and color for subway lines
	//sets random color for subway lines
	strokeWeight(s);
	let randFillR1 = random(255);
	let randFillG1 = random(255);
	let randFillB1 = random(255);
	stroke(randFillR1, randFillG1, randFillB1);
	//sets random x values for position on canvas for subway lines
	let redxpos2 = random(80, 158);
	line(redxpos2, 0, redxpos2, 950);
	redxpos = random(200, 600);
	strokeWeight(d);
	line(redxpos, 950, redxpos, 400);
	line(redxpos, 400, 200, 0);
	strokeWeight(m);
	stroke("#ECF6F9");
	line(redxpos, 950, redxpos, 400);
	line(redxpos, 400, 200, 0);
	//each subway line follows the same structure and random values as the first one above
	//each subway line has a different color, location, and direction 
	strokeWeight(s);
	let randFillR2 = random(255);
	let randFillG2 = random(255);
	let randFillB2 = random(255);
	stroke(randFillR2, randFillG2, randFillB2);
	let bluexpos2 = random(58);
	line(58, 0, bluexpos2, 300);
	line(bluexpos2, 300, bluexpos2, 400);
	line(bluexpos2, 400, bluexpos2, 950);
	strokeWeight(d);
	bluexpos = random(100, 400)
	line(370, 950, bluexpos, 400);
	line(bluexpos, 400, bluexpos, 100);	
	line(bluexpos, 100, 100, 0);
	strokeWeight(m);
	stroke("#ECF6F9");
	line(370, 950, bluexpos, 400);
	line(bluexpos, 400, bluexpos, 100);	
	line(bluexpos, 100, 100, 0);

	strokeWeight(100);
	let randFillR3 = random(255);
	let randFillG3 = random(255);
	let randFillB3 = random(255);
	stroke(randFillR3, randFillG3, randFillB3);
	let orangexpos = random(400,600)
	line(620, 450, 380, 180);
	line(380, 180, 380, 0);
	strokeWeight(m);
	stroke("#ECF6F9")
	line(600, 430, 380, 180);
	line(380, 180, 380, 0);
	line(600, 390, 405, 175);
	line(405, 175, 405, 0);
	line(600, 390, 405, 175);
	line(600, 470, 355, 185);
	line(355, 185, 355, 0);
	
	strokeWeight(d);
	let randFillR4 = random(255);
	let randFillG4 = random(255);
	let randFillB4 = random(255);
	stroke(randFillR4, randFillG4, randFillB4);
	let greenxpos = random(400, 600)
	line(greenxpos, 600, 620, 850);
	line(greenxpos, 600, greenxpos, 400);
	line(greenxpos, 400, greenxpos, 150);
	line(greenxpos, 150, 500, 0);
	strokeWeight(m);
	stroke("#ECF6F9");
	line(greenxpos, 600, 620, 850);
	line(greenxpos, 600, greenxpos, 400);
	line(greenxpos, 400, greenxpos, 150);
	line(greenxpos, 150, 500, 0);

	strokeWeight(d);
	let randFillR5 = random(255);
	let randFillG5 = random(255);
	let randFillB5 = random(255);
	stroke(randFillR5, randFillG5, randFillB5);
	line(600, 540, 300, 200);
	line(300, 200, 300, 0);
	strokeWeight(m);
	stroke("#ECF6F9")
	line(600, 540, 300, 200);
	line(300, 200, 300, 0);

	strokeWeight(d);
	let randFillR6 = random(255);
	let randFillG6 = random(255);
	let randFillB6 = random(255);
	stroke(randFillR6, randFillG6, randFillB6);
	let purplexpos = random(301)
	line(-50, 400, purplexpos, 700);
	line(purplexpos, 700, 300, 950);
	strokeWeight(m);
	stroke("#ECF6F9")
	line(-50, 400, purplexpos, 700);
	line(purplexpos, 700, 300, 950);

}