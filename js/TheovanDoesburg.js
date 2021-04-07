function setup(){
	createCanvas(600,600)
}
//runs forever
function draw(){
	var recWidth = 50
	var recHeight = 100
	background("black");

	noStroke();
	fill("white")
	rect(0,600 - recHeight,60,100);

	stroke(0);
	fill("orange");
	beginShape();
	vertex(-50,500)
	vertex(400,500)
	vertex(80,300)
	endShape(CLOSE);
}