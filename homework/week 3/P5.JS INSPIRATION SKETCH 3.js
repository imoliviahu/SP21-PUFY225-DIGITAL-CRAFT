function setup(){
	createCanvas(600,800)
}
//runs forever
function draw(){
	background("#d9d9d9");

	noStroke();
	fill("#66ccff");
	triangle(600, 0, 300, 0, 600, 30)

	noStroke();
	fill("#8c8c8c");
	rect(250, 0, 80, 800)

	noStroke();
	fill("#8c8c8c");
	rect(250, 0, 80, 800)	

	noStroke();
	fill("#bfbfbf");
	rect(300, 0, 40, 800)	

	stroke("white");
	strokeWeight(5);
	fill("#008000");
	quad(500, 220, 340, 210, 340, 260, 500, 270)

	stroke("white");
	strokeWeight(5);
	fill("#004d00");
	quad(100, 300, 280, 210, 280, 260, 100, 350)

	stroke("white");
	strokeWeight(5);
	fill("#000000");
	quad(100, 380, 380, 410, 380, 480, 100, 480)

	noStroke();
	fill("white");
	beginShape();
	vertex(120, 432);
	vertex(166, 396);
	vertex(166, 423);
	vertex(347, 431);
	vertex(347, 450);
	vertex(166, 442);
	vertex(166, 469);
	endShape();

	noStroke();
	fill("#ffdb4d");
	rect(240, 500, 80, 300)	

	stroke("#cca300");
	fill("#990000")
	circle(280, 550, 70)

	stroke("#cca300");
	fill("#e6b800")
	circle(280, 650, 70)

	stroke("#cca300");
	fill("#66cc00")
	circle(280, 750, 70)
}

