
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone,ground;
var boy,boyimg;
var tree,treeimg;
var m1,m2,m3,m4,m5;




function preload()
{
	boyimg = loadImage("Plucking mangoes/boy.png");
	treeimg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1500, 700);
	background("white");


	engine = Engine.create();
	world = engine.world;

	stone = new stones(135,500,50,50);

	boy = createSprite(200,600,1,1);
	boy.addImage("BOY",boyimg);
	boy.scale = 0.13;

	tree = new trees(200,300,900,900);
	
	ground = new Grounds(750,650,1500,5);
	sling = new slingshot(stone.body,{x:135,y:500});
	//Create the Bodies Here.

	m1 = new mango_1(500,100,70,70);
	m2 = new mango_1(300,50,70,70);
	m3 = new mango_1(400,150,70,70);
	m4 = new mango_1(400,20,70,70)
	m5 = new mango_1(500,30,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  
  ground.display();
  tree.display();
  
  
 
  stone.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  

 


  dcl(stone.body,m1.body);
  dcl(stone.body,m2.body);
  dcl(stone.body,m3.body);
  dcl(stone.body,m4.body);
  dcl(stone.body,m5.body);

 
  drawSprites();
 
  

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235, y:420});
		sling.attach(stone.body,{x:135,y:500});
	}
}
//create function
function dcl(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
	
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=mangoBodyPosition.r +stoneBodyPosition.r){

		Body.setStatic(bodyB,false);
	}
	
}







