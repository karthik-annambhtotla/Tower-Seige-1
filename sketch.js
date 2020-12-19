const Engine = Matter.Engine;  
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;

var ground1,ground2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var boxx1,boxx2,boxx3,boxx4,boxx5,boxx6,boxx7,boxx8,boxx9,boxx10,boxx11,boxx12,boxx13,box1x4,boxx15,boxx16;

var polygon,polygonImage;
var holder;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    createCanvas(1000,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground1 = new Ground(390,300,250,10);
    ground2 = new Ground(730,200,250,10);  

    
    box1 = new Box(300,275);
    box2 = new Box(330,275);
    box3 = new Box(360,275);
    box4 = new Box(390,275);
    box5 = new Box(420,275);
    box6 = new Box(450,275);
    box7 = new Box(480,275);

    box8  = new Box(330,235);
    box9  = new Box(360,235)
    box10 = new Box(390,235);
    box11 = new Box(420,235)
    box12 = new Box(450,235);

     box13 = new Box(360,195);
     box14 = new Box(390,195);
     box15 = new Box(420,195);

     box16 = new Box(390,10);
     
     boxx1 = new Box(640,175);
     boxx2 = new Box(670,175);
     boxx3 = new Box(700,175);
     boxx4 = new Box(730,175);
     boxx5 = new Box(760,175);
     boxx6 = new Box(790,175);
     boxx7 = new Box(810,175);
    
     boxx8 = new Box(670,135);
     boxx9 = new Box(700,135);
     boxx10 = new Box(730,135);
     boxx11 = new Box(760,135);
     boxx12 = new Box(790,135);

     boxx13 = new Box(700,95);
     boxx14 = new Box(730,95);
     boxx15 = new Box(760,95);

     boxx16 = new Box(730,10);

     polygon = Bodies.circle(100,150,30);
    World.add(myWorld,this.polygon);
    holder = new Polygon(this.polygon,{
        x:100,
        y:80
    })
    }

function draw(){
    background("green");

    Engine.update(myEngine);
    ground1.display();
    ground2.display();
    fill("cyan");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("blue");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("darkblue")
    box13.display();
    box14.display();
    box15.display();
    fill("turquoise")
    box16.display();

    fill(220,20,60);
    boxx1.display();
    boxx2.display();
    boxx3.display();
    boxx4.display();
    boxx5.display();
    boxx6.display();
    boxx7.display();
    fill(255,0,0);
    boxx8.display();
    boxx9.display();
    boxx10.display();
    boxx11.display();
    boxx12.display();
    fill(120,0,0);
    boxx13.display();
    boxx14.display();
    boxx15.display();
    fill(255,100,70)
    boxx16.display();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);
    holder.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{
        x:mouseX,
        y:mouseY
    })
}

function mouseReleased(){
    holder.fly();
}