class Drop
{
    constructor(x,y)
 {
   var options = {
      isStatic : false,
 }
    this.body = Bodies.circle(x,y,options);
    World.add(world,this.body);
 }

 display()
 {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    fill("blue");
    pop();
 }

}

