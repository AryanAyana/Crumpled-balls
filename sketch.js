
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,paper1,ground,dustbin1,dusbin2,dustbin3;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,10);

    ground = new Ground(400,680,800,20);

	leftSide = new dustbin(1300,660,100,20);
	bottom = new dustbin(1240,620,20,100);
	rigthSide = new dustbin(1350,620,20,100);

	Engine.run(engine);
	
	
}
  



function draw() {
  rectMode(CENTER);
  background(0);
 

paper.display();

 ground.display();

 leftSide.display();
 bottom.display();
 rigthSide.display();

 drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paper1.body.position,{x: 15,y: -15})
 }	
}

