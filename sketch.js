var tom,tomstand,tomwalk,tomlose;
var jerry,jerrystand,jerrytease,jerrywin;
var park,parkimg;

function preload() {

parkimg=loadImage("images/garden.png");
tomstand=loadImage("images/cat1.png");
jerrystand=loadImage("images/mouse1.png");
tomwalk=loadAnimation("images/cat2.png","images/cat3.png");
jerrytease=loadAnimation("images/mouse2.png","images/mouse3.png");
tomlose=loadAnimation("images/cat4.png");
jerrywin=loadAnimation("images/mouse4.png");


}

function setup(){
createCanvas(800,800);
park=createSprite(400,400);
park.addImage("park",parkimg);

tom= createSprite(650,650,80,80);
tom.addImage("standing",tomstand);
tom.scale=0.16;
jerry= createSprite(100,640,80,80);
jerry.addImage("standing",jerrystand);
jerry.scale=0.14;

}

function draw() {
    background(255);

if(tom.x-jerry.x<(tom.width-jerry.width)*3){
    tom.velocityX=0;
    jerry.addAnimation("win",jerrywin);
    jerry.changeAnimation("win");
    tom.addAnimation("lose",tomlose);
    tom.changeAnimation("lose");

}
//tom.debug=true;
//jerry.debug=true;
    tom.setCollider("rectangle",0,0,1000,990);
    jerry.setCollider("rectangle",0,0,1000,990);
    text(mouseX +','+ mouseY,10,45);


drawSprites();

}


function keyPressed(){

if(keyCode===LEFT_ARROW){
tom.velocityX=-4;
tom.addAnimation("run",tomwalk);
tom.changeAnimation("run");
jerry.addAnimation("tease",jerrytease);
jerry.changeAnimation("tease");

}

}
