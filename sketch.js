var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var gameState="play"
var divisions=[];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  text("Score : "+score,20,30);
  fill(255)
  textSize(36)
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)
  text("500",320,550)
  text("500",400,550)
  text("500",480,550)
  text("500",560,550)
  text("500",640,550)
  text("500",720,550)

  ground.display();
   if(gameState==="end"){
   background("black")
   fill("red")
  textSize(100)
   text("Game Over",200,400)
}
 
  Engine.update(engine);
 
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
   if(particles!=null){
     particles.display
       if(particles.body.position.y>700)
            {
          if(particles.body.position.x>300){
          score=score+500
          particles=null
          if(count>=5)gameState="end"
        }

    else if(particles.body.position.x<600&& particle.body.position.x>301){
    score=score+100 
    particles=null
    if(count>=5){gameState="end"
    }
     } 
    else if(particles.body.position.x<600&& particle.body.position.x>601){
    score=score+200 
    particles=null
   if(count>=5)gameState="end"  
   }
  }}
    for (var i=0;i<division.length;i++){
    division[i].display();
}
}


function mousePressed(){
  if(gameState=="end"){
  count++
  particles=new Particle(mouseX,50,10,10)
}
}


   