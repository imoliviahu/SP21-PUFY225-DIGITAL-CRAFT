function setup(){
	createCanvas(600,600)
}
//runs forever
function draw(){
	background("#000000");

	noStroke();
	fill("ffffff")
	circle(300, 300, 400, 400)

	noStroke();
	fill("#d2a679");
	triangle(300, 100, 500, 300, 200, 500);

	noStroke();
	fill("#ff3333");
	triangle(300, 150, 470, 310, 200, 500);

	noStroke();
	fill("#ffeb99");
	triangle(300, 160, 470, 320, 200, 510);

	noStroke();
	fill("#990000")
	ellipse(300, 300, 50, 50)

	noStroke();
	fill("#e60000")
	ellipse(300, 300, 50, 60)

	noStroke();
	fill("#e60000")
	ellipse(390, 310, 50, 60)

	noStroke();
	fill("#e60000")
	ellipse(290, 380, 50, 60)

	noStroke();
	fill("#e60000")
	ellipse(320, 210, 50, 60, 0, 90)

	noStroke();
	fill("#e60000")
	ellipse(230, 450, 50, 60)

}

