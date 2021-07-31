var sprite;
function setup(){
createCanvas(400,400)
sprite=createSprite(150,150,50,50)
}
function draw(){
if(keyIsDown(DOWN_ARROW)){
background("red")}
drawSprites()
}
