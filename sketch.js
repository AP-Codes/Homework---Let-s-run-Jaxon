var path
var pathImage
var runner, runnerMoving;
var invisWall1, invisWall2



function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  runnerMoving = loadAnimation("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  //creating path
  path = createSprite(200, 200)
  path.addImage("path", pathImage)
  path.velocityY = 10
  path.scale = 1.2

  //creating runner
  runner = createSprite(200, 350)
  runner.addAnimation("moving", runnerMoving)
  runner.scale = 0.1

  //creating boundaries
  invisWall1 = createSprite(0, 200, 10, 400)
  invisWall1.visible = false

  invisWall2 = createSprite(400, 200, 10, 400)
  invisWall2.visible = false

  
}

function draw() {
  background(0);

  //making path infinite
  if(path.y>350){
    path.y = height/2
  }

  //runnr will follow mouse x
  runner.x = World.mouseX

  //runner will collide with barier, so he can't get out
  runner.collide(invisWall1)
  runner.collide(invisWall2)

  drawSprites();

}


/*
var sea;
var sea_image
var ship, ship_moving, edges;


function preload(){
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  sea_image = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(50, 150, 600, 5)
  sea.addImage("sea", sea_image )
  sea.velocityX = -5;
  sea.scale=1;

  ship = createSprite(160, 210, 20, 50);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites();
  ship.scale=0.3;
}

function draw() {
  background("blue");
 
  if(sea.x<0){
    sea.x=sea.width/2
  }


  drawSprites();

}

*/