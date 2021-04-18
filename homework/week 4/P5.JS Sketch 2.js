
const x = 300;
const y = 90;
const w = 50; 
const l = 200;
function setup(){
	createCanvas(600,600)
}

function draw(){
	background("#505252");
	
	noStroke();
	fill("white");
	rect(x, 100, l, w);
	rect(x, 200, l, w);
	rect(x, 300, l, w);
	rect(x, 400, l, w);
	rect(x, 500, l, w);
	rect(x, 600, l, w);
	rect(x, -1, l, w);
	
	rect(0, y, w, l);
	rect(100, y, w, l);
	rect(200, y, w, l);
	rect(550, y, w, l);

	rect(-50, 450, l, w);
	rect(-50, 550, l, w);
	rect(-50, 650, l, w);
	rect(-50, 750, l, w);
	rect(550, 350, l, w);
	rect(550, 450, l, w);
	rect(550, 550, l, w);
	rect(550, 650, l, w);

	rect(-100, -150, w, l);
	rect(0, -150, w, l);
	rect(100, -150, w, l);
	rect(200, -150, w, l);
	
	strokeWeight(30);
	stroke("white");
	line(250, 500, 250, 350);
	line(100, 350, 250, 350);
	line(200, 550, 200, 400);
	line(50, 400, 200, 400);
	line(550, 30, 700, 30);
	line(550, 30, 550, 0);



}