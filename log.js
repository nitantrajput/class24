class Log {
    constructor(x,y,height,angle){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = height;

        var options = {
        'restitution':0.1,
        'friction':1,
        'density':1.0
        }
        
        this.log = Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(world,this.log);
        Matter.Body.setAngle(this.log,angle);

    }
    display(){
    var pos =this.log.position;
    var angle = this.log.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    strokeWeight(3);
    stroke("grey");
    rect(0, 0, this.width, this.height);
    pop();
    }


}
