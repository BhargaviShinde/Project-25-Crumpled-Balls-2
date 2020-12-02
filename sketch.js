const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinn;
var paper;
var ground, ground1;

function setup() {
	createCanvas(1000,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paper = new Paper(100,350,50);

    ground = new Ground(500,680);
    
    ground1 = createSprite(500,657,1000,20);
    ground1.shapeColor = "brown";    

    //dustbin = createSprite(755,650,180,10);
    //dustbin.shapeColor = "white";
    
    //dustbin2 = createSprite(690,585,10,130);
    //dustbin2.shapeColor = "white";
    
    //dustbin3 = createSprite(840,585,10,130);
    //dustbin3.shapeColor = "white";

    dustbinn = new Dustbin(730,670);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  ground.display();
  ground1.display();
  
 // dustbin.display();
  ///dustbin2.display();
 // dustbin3.display();

  dustbinn.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:7,y:-25});
  }
}



