const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;
var score = 0 ;
var particle;
var gamestate = "play";
var count = 0 ;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;





function setup() {
  createCanvas(480,800);
 engine = Engine.create()
 world = engine.world
ground = new Ground(240,790,480,10)
for (var k =0 ; k<=width; k=k + 80){
  divisions.push(new Division(k,height-divisionheight/2,10,divisionheight))

}
for (var j = 40; j <= width;j = j + 50){
plinkos.push( new Plinko(j,75))

}

for (var j = 15; j <=width -10;j=j+50 ){

plinkos.push(new Plinko(j,175));

}}




function draw() {
  background(255,255,255);  
 textSize(20)

  text("score"+score,350,300)

Engine.update(engine)
ground.display()
for (var k =0; k <divisions.length; k++)
{
 divisions[k].display();
}
for (var j =  0; j< plinkos.length;j++){
  plinkos[j].display();
}

text("400",430,600)
text("500",330,600)
text("0",260,600)
text("200",180,600)
text("200",100,600)
text("100",20,600)




if (particle != null){
  particle.display();

  if(particle.body.position.y > 760)
{
  if (particle.body.position.x< 100){
    score=score+100;
    particle=null;
    if (count>=5) gamestate = "end"
  }
}


}
if (particle != null){
  particle.display();

  if(particle.body.position.y > 760)
{
  if (particle.body.position.x>100  && particle.body.position.x < 200){
    score=score+200;
    particle=null;
    if (count>=5) gamestate = "end"
  }
}


}
if (particle != null){
  particle.display();

  if(particle.body.position.y > 760)
{
  if (particle.body.position.x>200  && particle.body.position.x < 300){
    score=score+500;
    particle=null;
    if (count>=5) gamestate = "end"
  }
}


}
if (particle != null){
  particle.display();

  if(particle.body.position.y > 760)
{
  if (particle.body.position.x>300  && particle.body.position.x < 400){
    score=score+500;
    particle=null;
    if (count>=5) gamestate = "end"
  }
}


}
if (particle != null){
  particle.display();

  if(particle.body.position.y > 760)
{
  if (particle.body.position.x>400  && particle.body.position.x < 500){
    score=score+400;
    particle=null;
    if (count>=5) gamestate = "end"
  }
}


}
}
function mousePressed()
{
  if(gamestate !== "end"){

    count++;
    particle = new Particles(mouseX,10,10,10)
  }
}