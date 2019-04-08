let x, y, xSpeed, ySpeed;
let dvd;
let r,g,b;

function preload()
{
	dvd = loadImage("dvd.png");
}

function setup()
{
	var can = createCanvas(600, 400);
	can.parent("divContain");
	x = random(0, width - dvd.width);
	y = random(0, width - dvd.height + 10);
	xSpeed = ySpeed = 5;
	r = g = b = 225;
}


function pickColor() {
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
}

function draw()
{
	background(0);
	tint(r,g,b);
	image(dvd, x, y);
	if(x >= width - dvd.width) 
	{
		x = width - dvd.width;
		xSpeed = -xSpeed;
		pickColor();
	} else if (x <= 0) {
		x = 0;
		xSpeed = -xSpeed;
		pickColor();
	}
	if(y >= height - dvd.height+30) 
	{	
		y = height - dvd.height+30;
		ySpeed = -ySpeed;
		pickColor();
	} else if (y <= -30){
		y = -30;
		ySpeed = -ySpeed;
		pickColor();
	}
	x = x + xSpeed;
	y = y + ySpeed;
}