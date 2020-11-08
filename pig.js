class Pig {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;

        var options = {
        'restitution':0.1,
        'friction':1,
        'density':1.0
        }
        
        this.pig = Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(world,this.pig);
        
    }
    display(){
    var pos =this.pig.position;
    var angle = this.pig.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    strokeWeight(3);
    stroke("white");
    rect(0, 0, this.width, this.height);
    pop();
    }


}
