const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 40

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(400, 50, 700, 35)

	bob1 = new Bob(200, 500, 100)
	bob2 = new Bob(250, 500, 100)
	bob3 = new Bob(300, 500, 100)
	bob4 = new Bob(350, 500, 100)
	bob5 = new Bob(400, 500, 100)

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0)
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter, 0)
	rope3 = new Rope(bob3.body, roof.body, 0, 0)
	rope4 = new Rope(bob4.body, roof.body, bobDiameter, 0)
	rope5 = new Rope(bob5.body, roof.body, bobDiameter * 2, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)
  drawSprite();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  Engine.update(engine);
 
}


function keyPressed() {
	if (keyCode === UP_ARROW)

		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -300, y: 300 })
}