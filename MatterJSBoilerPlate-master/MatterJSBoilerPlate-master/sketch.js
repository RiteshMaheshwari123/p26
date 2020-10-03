
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paper
var ground
var bottomBox,bottomBox_Image,rightBox,leftBox;

function preload()
{
	bottomBox_Image = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,690,800,10);
	ground.shapeColor = "yellow";

	rightBox = createSprite(470, 630, 5,100);

	leftBox = createSprite(530, 630, 5,100);


	bottomBox = createSprite(500, 630, 100,10);
	bottomBox.addImage("bin",bottomBox_Image);
	bottomBox.scale = 0.3

	

	//Create the Bodies Here.
	paper = new Paper(160,680);

ground = Bodies.rectangle(400, 690, 800, 20, {isStatic:true} );
 	World.add(world, ground);

	 bottomBox = Bodies.rectangle(400, 650, 200,20, {isStatic:true});
	World.add(world, bottomBox);

	rightBox = Bodies.rectangle(470, 630, 5, 100,  {isStatic:true});
	World.add(world, bottomBox);

	leftBox = Bodies.rectangle(530, 630, 5,100,  {isStatic:true});
	World.add(world, bottomBox);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}

