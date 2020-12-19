class Polygon{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.6,
            length:150
        }
    this.sling=Matter.Constraint.create(options);
    this.pointB=pointB;
    World.add(myWorld,this.sling);
}
fly(){
    this.sling.bodyA=null;
}

display(){
 if(this.sling.bodyA){
    var pos=this.sling.bodyA.position;
     var pointB= this.pointB;

    stroke("orange");
    strokeWeight(3);
    line(pos.x,pos.y,pointB.x,pointB.y);
 }
}
}