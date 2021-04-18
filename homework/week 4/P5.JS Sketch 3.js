const d = 50;
const m = 5;
const s = 25;
function setup(){
	createCanvas(600,600)
}

function draw(){
	background("#ECF6F9");

	strokeWeight(d);
	stroke("red");
	line(500, 600, 200, 400);
	line(200, 400, 200, 0);
	strokeWeight(s);
	line(158,0, 158, 600);
	strokeWeight(m);
	stroke("white");
	line(500, 600, 200, 400);
	line(200, 400, 200, 0);	

	strokeWeight(d);
	stroke("#2879AB");
	line(370, 600, 370, 400);
	line(370, 400, 100, 100);	
	line(100, 100, 100, 0);
	strokeWeight(s);
	line(58, 0, 58, 300);
	line(58, 300, 10, 400);
	line(10, 400, 10, 600);
	strokeWeight(m);
	stroke("white");
	line(370, 600, 370, 400);
	line(370, 400, 100, 100);	
	line(100, 100, 100, 0);	

	strokeWeight(100);
	stroke("#FAA211");
	line(600, 430, 380, 180);
	line(380, 180, 380, 0);
	strokeWeight(m);
	stroke("white")
	line(600, 430, 380, 180);
	line(380, 180, 380, 0);
	line(600, 390, 405, 175);
	line(405, 175, 405, 0);
	line(600, 390, 405, 175);
	line(600, 470, 355, 185);
	line(355, 185, 355, 0);
	
	strokeWeight(d);
	stroke("#2AAB28")
	line(420, 600, 420, 400);
	line(420, 400, 500, 150);
	line(500, 150, 500, 0);
	strokeWeight(m);
	stroke("white");
	line(420, 600, 420, 400);
	line(420, 400, 500, 150);
	line(500, 150, 500, 0); 

	strokeWeight(d);
	stroke("#F7EB33");
	line(600, 540, 300, 200);
	line(300, 200, 300, 0);
	strokeWeight(m);
	stroke("white")
	line(600, 540, 300, 200);
	line(300, 200, 300, 0);






}