const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    hammer = new Hammer(10,100);

    rubber= new rubber(900,450,70);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    iron1 =new iron(30,3)
    stone1 = new stone(150, 305, 300, 170);

}

function draw(){
    background("lightBlue");

    Engine.update(engine);


    hammer.display();
     rubber.display();
     iron1.display();
     ground.display();
     platform.display();
     stone1.display();
}