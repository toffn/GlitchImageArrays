var img;
var imageList = []; //Initialize array of images
var displayString = ""; //Initialize any potential text displayed
var string1 = "☺ ☺";

//Setting up state machine
var state;
var state1 = 1;
var state2 = 2;
var state3 = 3;
var state4 = 4;
var state5 = 5;
var state6 = 6;

//Timer
var startMillis;

//Preloading images
function preload()
{
	imageList[0]=loadImage('assets/image1.jpg');
	imageList[1]=loadImage('assets/image2.jpg');
	imageList[2]=loadImage('assets/image3.jpg');
	imageList[3]=loadImage('assets/image4.jpg');
	imageList[4]=loadImage('assets/image5.jpg');
	imageList[5]=loadImage('assets/image6.jpg');

}

function setup()
{
	imageMode(CENTER);
	chooseNewImage();
	createCanvas(1000,900);

	startMillis = millis();
}

function draw()
{
	background(255);

	if (millis() > startMillis + 1000)
	{
		chooseNewImage();
    	startMillis = millis();
	}

	image(img, width/2, height/2, 1000, 750);
	keyPressed();
}

//Circles
function drawImage1()
{
	background(255);
	image(imageList[0], width/2, height/2,1000,821);

	noStroke();
	fill(random(0,255),random(0,255),random(0,255),40);
	ellipse(mouseX,mouseY,random(0,width),random(0,height));
	ellipse(mouseX,mouseY,random(0,width),random(0,height));

	ellipse(mouseX/2,mouseY/2,random(0,width),random(0,height));
	ellipse(mouseX*2,mouseY*2,random(0,width),random(0,height));

	ellipse(mouseX/-5,mouseY/2,random(0,40),random(0,80));
	ellipse(mouseX*-5,mouseY*2,random(0,60),random(0,110));
}

//Random lines glitch
function drawImage2()
{
	background(255);
	image(imageList[1], width/2, height/2, 1000,751);

	for (let i=1;i<100;i++)
	{
		stroke(0, random(0, 255));
		line(random(0, 1000),random(75, 826),random(0, 1000),random(75, 826));
		line(random(0, 1000),random(75, 826),random(0, 1000),random(75, 826));
		stroke(255, random(0, 255));
		line(random(0, 1000),random(75, 826),random(0, 1000),random(75, 826));
		stroke(255, 204, 100, random(0, 255));
		line(random(0, 1000),random(75, 826),random(0, 1000),random(75, 826));
	}
}

//Vertical lines
function drawImage3()
{
	background(255);
	image(imageList[2], width/2, height/2,1000,750);

	//Vertical white
	stroke(255, random(0, 255));
	for (let i = 0;i<1000;i++)
	{
		line(0+i,random(75, 826),0+i,random(75, 826));
		line(1000-i,random(75, 826),1000-i,random(75, 826));
	}
	//Vertical red
	stroke(255, 0, 38, 100);
	for (let i = 0;i<500;i++)
	{
		line(0+i,random(75, 826),0+i,random(75, 826));
		line(1000-i,random(75, 826),1000-i,random(75, 826));
	}
}

//Circles
function drawImage4()
{
	background(255);
	image(imageList[3], width/2, height/2,1000,750);

	for (let i=0;i<3;i++)
	{
	noStroke();
	fill(random(0,255),random(0,255),random(0,255),40);
	ellipse(mouseX,mouseY,random(0,width),random(0,height));
	ellipse(mouseX+200,mouseY,random(0,width),random(0,height));
	ellipse(mouseX-200,mouseY,random(0,width),random(0,height));
	ellipse(mouseX,mouseY+200,random(0,width),random(0,height));
	ellipse(mouseX,mouseY-200,random(0,width),random(0,height));

	}
}

//Horizontal and vertical lines
function drawImage5()
{
	background(255);
	image(imageList[4], width/2, height/2,1000,749);

	//Vertical green
	stroke(34, 130, 80, 60);
	for (let i = 0;i<1000;i++)
	{
		line(0+i,random(75, 826),0+i,random(75, 826));
		line(1000-i,random(75, 826),1000-i,random(75, 826));
	}

	//Horizontal pink
	stroke(255, 0, 38, 100);
	for (let i = 0;i<height-150;i++)
	{
		line(random(0, 1000),75+i,random(0,width),75+i);
	}
}

//Broken string
function drawImage6()
{
	background(255);
	image(imageList[5], width/2, height/2)
	
	fill(0);
	for (let i=0;i<50;i++)
	{
		string1 = string1 +2 ;
		text(string1, random(0,width), random(75,height-75));
	}
}

//Randomly choosing a new image
function chooseNewImage()
{
	img=random(imageList);
	print(img);
}

//State machine
function keyPressed()
{
	if (key == " ")
	{
		chooseNewImage();
	}
	else if (key == "1")
	{
		drawImage1();
	}
	else if (key == "2")
	{
		drawImage2();
	}
	else if (key =="3")
	{
		drawImage3();
	}
	else if (key == "4")
	{
		drawImage4();
	}
	else if (key == "5")
	{
		drawImage5();
	}
	else if (key == "6")
	{
		drawImage6();
	}
}