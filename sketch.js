const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35, box36, box37, box38, box39, box40, box41, box42, box43, box44, box45, box46, box47, box48, box49, box50, box51, box52, box53, box54, box55, box56, box57, box58, box59;
var ball, ballp;
var slingshot;
var backgroundImg;

var bacg = "day.png";
var score = 0

function preload()
{
  ballp = loadImage("hexagon.png");
  getBackgroundImg();
}


function setup() {
  createCanvas(1700,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2-100, height/2+110, 300, 20);
  ground2 = new Ground(width/2+300, height/2-50, 200, 20);
  ground3 = new Ground(width/2+0, height/2+200, 1700,40)

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);
   
  slingshot = new Slingshot(this.ball, {x:200, y:200});

  box10 = new Box(width/2-215, height/2+80, 30, 40);
  box11 = new Box(width/2-185, height/2+80, 30, 40);
  box12 = new Box(width/2-155, height/2+80, 30, 40);
  box13 = new Box(width/2-125, height/2+80, 30, 40);
  box14 = new Box(width/2-95, height/2+80, 30, 40);
  box15 = new Box(width/2-65, height/2+80, 30, 40);
  box16 = new Box(width/2-35, height/2+80, 30, 40);
  box17 = new Box(width/2-5, height/2+80, 30, 40);
  box18 = new Box(width/2-200, height/2+40, 30, 40);
  box19 = new Box(width/2-170, height/2+40, 30, 40);
  box20 = new Box(width/2-140, height/2+40, 30, 40);
  box21 = new Box(width/2-110, height/2+40, 30, 40);
  box22 = new Box(width/2-80, height/2+40, 30, 40);
  box23 = new Box(width/2-50, height/2+40, 30, 40);
  box24 = new Box(width/2-20, height/2+40, 30, 40);
  box25 = new Box(width/2-185, height/2, 30, 40);
  box26 = new Box(width/2-155, height/2, 30, 40);
  box27 = new Box(width/2-125, height/2, 30, 40);
  box28 = new Box(width/2-95, height/2, 30, 40);
  box29 = new Box(width/2-65, height/2, 30, 40);
  box30 = new Box(width/2-35, height/2, 30, 40);
  box31 = new Box(width/2-170, height/2-40, 30, 40);
  box32 = new Box(width/2-140, height/2-40, 30, 40);
  box33 = new Box(width/2-110, height/2-40, 30, 40);
  box34 = new Box(width/2-80, height/2-40, 30, 40);
  box35 = new Box(width/2-50, height/2-40, 30, 40);
  box36 = new Box(width/2-140, height/2-80, 30, 40);
  box37 = new Box(width/2-125, height/2-80, 30, 40);
  box38 = new Box(width/2-95, height/2-80, 30, 40);
  box45 = new Box(width/2+220, height/2-80, 30, 40);
  box46 = new Box(width/2+250, height/2-80, 30, 40);
  box47 = new Box(width/2+280, height/2-80, 30, 40);
  box48 = new Box(width/2+310, height/2-80, 30, 40);
  box49 = new Box(width/2+340, height/2-80, 30, 40);
  box50 = new Box(width/2+370, height/2-80, 30, 40);
  box51 = new Box(width/2+235, height/2-120, 30, 40);
  box52 = new Box(width/2+265, height/2-120, 30, 40);
  box53 = new Box(width/2+295, height/2-120, 30, 40);
  box54 = new Box(width/2+325, height/2-120, 30, 40);
  box55 = new Box(width/2+355, height/2-120, 30, 40);
  box56 = new Box(width/2+250, height/2-160, 30, 40);
  box57 = new Box(width/2+280, height/2-160, 30, 40);
  box58 = new Box(width/2+310, height/2-160, 30, 40);
  box59 = new Box(width/2+340, height/2-160, 30, 40);
 
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);

      text("Score :" + score, 50, 130);

  fill("red")
  strokeWeight(12)
  textSize(26)
  text("Drag Stone and Release it.Press space to get one more chance",50,30);
  text("Score :" + score, 50, 130);
  stroke("black")
  strokeWeight(8)
  Engine.update(engine);
  drawSprites();
  ground1.display();
  ground2.display();
  ground3.display();
  
  fill(255, 190, 200);
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  fill(65, 220, 210);
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  fill(130, 130, 130);
  box25.display();
  box25.score();
  box26.display();
  box26.score();
  box27.display();
  box27.score();
  box28.display();
  box28.score();
  box29.display();
  box29.score();
  box30.display();
  box30.score();
  fill(135, 205, 235);
  box31.display();
  box31.score();
  box32.display();
  box32.score();
  box33.display();
  box33.score();
  box34.display();
  box34.score();
  box35.display();
  box35.score();
  fill(255, 190, 200);
  box36.display();
  box36.score();
  box37.display();
  box37.score();
  box38.display();
  box38.score();
 fill(135, 205, 235);
  box45.display();
  box45.score();
  box46.display();
  box46.score();
  box47.display();
  box47.score();
  box48.display();
  box48.score();
  box49.display();
  box49.score();
  box50.display();
  box50.score();
  fill(255, 190, 200);
  box51.display();
  box51.score();
  box52.display();
  box52.score();
  box53.display();
  box53.score();
  box54.display();
  box54.score();
  box55.display();
  box55.score();
  fill(65, 220, 210);
  box56.display();
  box56.score();
  box57.display();
  box57.score();
  box58.display();
  box58.score();
  box59.display();
  box59.score();

  slingshot.display();
  
  imageMode(CENTER);
  image(ballp, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.ball);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bacg = "day.png";
  }
  else{
      bacg = "night.jpg";
  }
  backgroundImg = loadImage(bacg);
  console.log(backgroundImg);
}