const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hex1;
var bg;
var backgroundImg,platform;
var slingShot;
var score = 0;

function preload() {
    getBackgroundColour();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

//getBackgroundColour();
    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500, height-100, 300, 50);
    stand2 = new Ground(900, height-100, 300, 50);

    box1 = new Blocks(750, height- 150,40,70);
    box2 = new Blocks(790, height- 150,40,70);
    box3 = new Blocks(830, height- 150,40,70);
    box4 = new Blocks(870, height- 150,40,70);
    box5 = new Blocks(910, height- 150,40,70);
    box6 = new Blocks(950, height- 150,40,70);
    box7 = new Blocks(990, height- 150,40,70);
    box8 = new Blocks(1030, height- 150,40,70);

    box9 = new Blocks(350, height- 150,40,70);
    box10 = new Blocks(390, height- 150,40,70);
    box11 = new Blocks(430, height- 150,40,70);
    box12 = new Blocks(470, height- 150,40,70);
    box13 = new Blocks(510, height- 150,40,70);
    box14 = new Blocks(550, height- 150,40,70);
    box15 = new Blocks(590, height- 150,40,70);
    box16 = new Blocks(630, height- 150,40,70);

   
    
   
    
  

    
    hex1 = new Hex(100,100);
    slingshot = new SlingShot(hex1.body, { x:200, y: 100})
    //log6 = new Log(230,180,80, PI/2);
    //chain = new Chain(bird.body,log6.body);
}
function mouseDragged(){
Matter.Body.setPosition(hex1.body, {x: mouseX, y: mouseY})

}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(hex1.body);
    }
}
async function getBackgroundColour() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = await responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour >= 6 && hour <= 19){
         bg = "green"
    }
    else{
        bg = "blue"
    }
  console.log("warm kitty") 
backgroundimg= bg
}



function draw(){
    background (backgroundimg)
    Engine.update(engine);
    //noStroke();
    textSize(35);
    fill ("black")
    text( "Score " + score, width-300, 50)

    strokeWeight(4);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    ground.display();
  
    stand1.display();
    stand2.display();

    box3.display();
    box3.score();
    box4.display();
    box4.score();
  

    box5.display();
    box5.score();
    box6.display();
    box6.score();


    box7.display();
    box7.score();
    box8.display();
    box8.score();

    box9.display();
    box9.score();
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

    hex1.display();
    slingshot.display();
    
  //  log6.display();
  //  chain.display();    
}

