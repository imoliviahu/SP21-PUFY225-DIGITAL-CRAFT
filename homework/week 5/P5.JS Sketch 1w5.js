//width of squares in checkered background
const w = 100;
//values that change size and location of each taxi
let x = 2;
let y = 3.5; 
let z = 0.5;
function setup(){
	createCanvas(600,600)
	noStroke();
	noLoop();
}

function draw(){
	checkered();
	taxis();
}

function checkered(){
//sets random color for background
	let randFillR = random(255);
	let randFillG = random(255);
	let randFillB = random(255);
	background(randFillR, randFillG, randFillB);
//sets random color for squares
//creates squares to create checkered background
	let randFillR1 = random(255);
	let randFillG1 = random(255);
	let randFillB1 = random(255);
	fill(randFillR1, randFillG1, randFillB1);
	square(0, 0, w);
	square(0, 200, w);
	square(0, 400, w);
	square(100, 100, w);
	square(200, 200, w);
	square(200, 400, w);
	square(300, 300, w);
	square(300, 100, w);
	square(300, 500, w);
	square(400, 400, w);
	square(400, 200, w);
	square(500, 500, w);
	square(500, 100, w);
	square(500, 300, w);
	square(100, 300, w);
	square(100, 500, w);
	square(200, 0, w);
	square(400, 0, w);
	square(600, 0, w);

}

//a function that displays the taxis
function taxis(){
//sets a random color for taxi sign, lights, and windows
	let randFillRt1 = random(255);
	let randFillGt1 = random(255);
	let randFillBt1 = random(255);
	fill(randFillRt1, randFillGt1, randFillBt1);
//creates smallest taxi
	rect(110 * z, 70 * z, 10 * z, 15 * z);
	fill("#FCE906");
	quad(70 * z, 80 * z, 145 * z, 80 * z, 165 * z, 120 * z, 50 * z, 120 * z);
	quad(10 * z, 120 * z, 210 * z, 120 * z, 225 * z, 160 * z, 5 * z, 160 * z); 
	fill(randFillRt1, randFillGt1, randFillBt1);
	quad(75 * z, 85 * z, 105 * z, 85 * z, 105 * z, 120 * z, 60 * z, 120 * z);
	quad(110 * z, 85 * z, 140 * z, 85 * z, 155 * z, 120 * z, 110 * z, 120 * z);
	fill("black");
	circle(165 * z, 160 * z, 40 * z);
	circle(60 * z, 160 * z, 40 * z); 
	fill("#B3B6B7");
	circle(165 * z, 160 * z, 20 * z);
	circle(60 * z, 160 * z, 20 * z);
	fill(randFillRt1, randFillGt1, randFillBt1);
	quad(9 * z, 130 * z, 13 * z, 130 * z, 20 * z, 140 * z, 8 * z, 140 * z);
	quad(200 * z, 130 * z, 210 * z, 130 * z, 215 * z, 140 * z, 200 * z, 140 * z);
	
//sets random color for taxi sign, lights, and windows
	let randFillRt2 = random(255);
	let randFillGt2 = random(255);
	let randFillBt2 = random(255);
	fill(randFillRt2, randFillGt2, randFillBt2);
//creates second smallest taxi
	rect(110, 70, 10, 15);
	fill("#FCE906");
	quad(70, 80, 145, 80, 165, 120, 50, 120);
	quad(10, 120, 210, 120, 225, 160, 5, 160);
	fill(randFillRt2, randFillGt2, randFillBt2);
	quad(75, 85, 105, 85, 105, 120, 60, 120);
	quad(110, 85, 140, 85, 155, 120, 110, 120);
	fill("black");
	circle(165, 160, 40);
	circle(60, 160, 40); 
	fill("#B3B6B7");
	circle(165, 160, 20);
	circle(60, 160, 20);
	fill(randFillRt2, randFillGt2, randFillBt2);
	quad(9, 130, 13, 130, 20, 140, 8, 140);
	quad(200, 130, 210, 130, 215, 140, 200, 140);

//sets random color for taxi sign, lights, and windows
	let randFillRt3 = random(255);
	let randFillGt3 = random(255);
	let randFillBt3 = random(255);
	fill(randFillRt3, randFillGt3, randFillBt3);
//creates second largest taxi
	rect(110 * x, 70 * x, 10  * x, 15 * x);
	fill("#FCE906");
	quad(70 * x, 80 * x, 145 * x, 80 * x, 165 * x, 120 * x, 50 * x, 120 * x);
	quad(10 * x, 120 * x, 210 * x, 120 * x, 225 * x, 160 * x, 5 * x, 160 * x);
	fill(randFillRt3, randFillGt3, randFillBt3);
	quad(75 * x, 85 * x, 105 * x, 85 * x, 105 * x, 120 * x, 60 * x, 120 * x);
	quad(110 * x, 85 * x, 140 * x, 85 * x, 155 * x, 120 * x, 110 * x, 120 * x);
	fill("black");
	circle(165 * x, 160 * x, 40 * x);
	circle(60 * x, 160 * x, 40 * x); 
	fill("#B3B6B7");
	circle(165 * x, 160 * x, 20 * x);
	circle(60 * x, 160 * x, 20 * x);
	fill(randFillRt3, randFillGt3, randFillBt3);
	quad(9 * x, 130 * x, 13 * x, 130 * x, 20 * x, 140 * x, 8 * x, 140 * x);
	quad(200 * x, 130 * x, 210 * x, 130 * x, 215 * x, 140 * x, 200 * x, 140 * x);

//sets random color for taxi sign, lights, and windows
	let randFillRt4 = random(255);
	let randFillGt4 = random(255);
	let randFillBt4 = random(255);
	fill(randFillRt4, randFillGt4, randFillBt4);
//creates largest taxi
	rect(110 * y, 70 * y, 10  * y, 15 * y);
	fill("#FCE906");
	quad(70 * y, 80 * y, 145 * y, 80 * y, 165 * y, 120 * y, 50 * y, 120 * y);
	quad(10 * y, 120 * y, 210 * y, 120 * y, 225 * y, 160 * y, 5 * y, 160 * y);
	fill(randFillRt4, randFillGt4, randFillBt4);
	quad(75 * y, 85 * y, 105 * y, 85 * y, 105 * y, 120 * y, 60 * y, 120 * y);
	quad(110 * y, 85 * y, 140 * y, 85 * y, 155 * y, 120 * y, 110 * y, 120 * y);
	fill("black");
	circle(165 * y, 160 * y, 40 * y);
	circle(60 * y, 160 * y, 40 * y); 
	fill("#B3B6B7");
	circle(165 * y, 160 * y, 20 * y);
	circle(60 * y, 160 * y, 20 * y);
	fill(randFillRt4, randFillGt4, randFillBt4);
	quad(9 * y, 130 * y, 13 * y, 130 * y, 20 * y, 140 * y, 8 * y, 140 * y);
	quad(200 * y, 130 * y, 210 * y, 130 * y, 215 * y, 140 * y, 200 * y, 140 * y);

}