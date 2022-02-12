
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40);
	bob2 = new bob(360,575,40);
	bob3 = new bob(400,575,40);
	bob4 = new bob(440,575,40);
	bob5 = new bob(480,575,40);

	bola1 = new bola(320,450,40);
	bola2 = new bola(360,450,40);
	bola3 = new bola(400,450,40);
	bola4 = new bola(440,450,40);
	bola5 = new bola(480,450,40);

	pelota1 = new pelota(320,325,40);
	pelota2 = new pelota(360,325,40);
	pelota3 = new pelota(400,325,40);
	pelota4 = new pelota(440,325,40);
	pelota5 = new pelota(480,325,40);
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0);
	rope2=new rope(bob2.body,roofObject.body,-40, 0);
	rope3=new rope(bob3.body,roofObject.body,0, 0);
	rope4=new rope(bob4.body,roofObject.body,40, 0);
	rope5=new rope(bob5.body,roofObject.body,80, 0);
	rope6=new rope(bola1.body,roofObject.body,-80, 0);
	rope7=new rope(bola2.body,roofObject.body,-40, 0);
	rope8=new rope(bola3.body,roofObject.body,0, 0);
	rope9=new rope(bola4.body,roofObject.body,40, 0);
	rope10=new rope(bola5.body,roofObject.body,80, 0);
	rope11=new rope(pelota1.body,roofObject.body,-80, 0);
	rope12=new rope(pelota2.body,roofObject.body,-40, 0);
	rope13=new rope(pelota3.body,roofObject.body,0, 0);
	rope14=new rope(pelota4.body,roofObject.body,40, 0);
	rope15=new rope(pelota5.body,roofObject.body,80, 0);
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();
  rope9.display();
  rope10.display();
  rope11.display();
  rope12.display();
  rope13.display();
  rope14.display();
  rope15.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  bola1.display();
  bola2.display();
  bola3.display();
  bola4.display();
  bola5.display();

  pelota1.display();
  pelota2.display();
  pelota3.display();
  pelota4.display();
  pelota5.display();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:45})
		Matter.Body.applyForce(bola1.body,bob1.body.position,{x:-50,y:45})
		Matter.Body.applyForce(pelota1.body,bob1.body.position,{x:-50,y:45})
	}
}






