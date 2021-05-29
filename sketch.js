const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let world, engine;
let block1;
let hittingBlock, slingShot1;


function setup() {
    engine = Engine.create();
    world = engine.world;

    createCanvas(800, 800);
    // if (frameCount % 150 === 0) {

    block1 = new Block(random(600, 675), random(-50, 50));
    hittingBlock = new Block(0, 0);
    slingShot1 = new Catapult(hittingBlock.body, { x: 100, y: 100 })

    Engine.run(engine);
}

function draw() {
    Engine.update(engine);

    background(255);


    // }


    block1.display();
    // block1.UpdateY();
    if (frameCount % 69 === 0) {
        if (block1.body.position.y > height) {
            block1 = new Block(random(600, 675), random(-50, 50));
        }
    }
    hittingBlock.display();
    slingShot1.display();

    if (keyCode === 32) {
        slingShot1.attach(hittingBlock.body);
    }
    drawSprites();

}

function mouseDragged() {
    Matter.Body.setPosition(hittingBlock.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
    slingShot1.fly();
}

