var ban, banIm, bangroup;
var rock, rockim, rockgroup;
var monkey, monkeyAni
var backIm
var count=0;
var backgr


function preload()
{
  banIm= loadImage("banana.png");
  rockim=loadImage("stone.png");
  backIm=loadImage("jungle.jpg");
  monkeyAni= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
}

function setup()
{
  createCanvas(400, 400);
 backgr=createSprite(0,0,800,400);
  backgr.addImage(backIm);
  backgr.scale=1.5
 backgr.velocityX=-4
  

  
  ground=createSprite(0,350,800,10);           
  ground.visible= false
  monkey= createSprite(100,320,20,20);
  monkey.addAnimation("walking",monkeyAni);
  monkey.scale=0.15
  monkey.velocityY=3
  bangroup=new Group();
  rockgroup= new Group();
}

function draw() {
  background(220);
  
 

 monkey.collide(ground);
   if(keyDown("space")&& monkey.y>280) {
    monkey.velocityY = -6;
  }
  
  monkey.velocityY = monkey.velocityY + 0.15
  
  if(bangroup.isTouching(monkey)){
bangroup.destroyEach();
  size();
    count=count+3
  }
  
  if(rockgroup.isTouching(monkey)){
    
    rockgroup.destroyEach();
    monkey.scale=  0.1;
    count= count- 2
  }
 
  count= count+Math.round(getFrameRate()/60);
    
  
  spawnBanana();
  spawnRock();
  
  
 drawSprites();
  
   stroke("white")
textSize(20)
  fill("white")
  text("score:"+count,300,20);
  
   if(backgr.x<0){
    backgr.x=backgr.width/2;}
 
}

function spawnBanana(){
  if(frameCount%80===0){
    ban=createSprite(400,200,20,20);
    ban.velocityX=-3;
    ban.addImage(banIm);
    ban.scale=0.05
    ban.y=Math.round(random(120,200));
    ban.lifetime=120;
    bangroup.add(ban);
  }
}

function spawnRock(){
  if(frameCount%300===0){
rock=createSprite(400,300,20,20);
  rock.velocityX=-4;
    rock.addImage(rockim);
    rock.scale=0.15;
    rock.lifetime=100
    rockgroup.add(rock);
  
  }
}
function size(){
  var rand= Math.round(random(1,3));
  switch(rand){
    case 1: monkey.scale=0.2;
      break;
      case 2: monkey.scale=0.23;
      break;
      case 3: monkey.scale=0.25;
      break;
      default:break;
  }
  
}