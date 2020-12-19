class Box{

constructor(x,y){

    var options ={
        restitution:0.8,
        friction:0.9,
        density:1.7
    }
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.width=30;
    this.height=40;

    World.add(myWorld,this.body)
}

display(){
var pos = this.body.position
push();
translate(pos.x,pos.y);
rotate(this.body.angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();

}



}