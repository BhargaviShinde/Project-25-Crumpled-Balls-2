
  class Dustbin{
    constructor(x,y){
        var options={
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y,180,10,options);
        this.image = loadImage("dustbingreen.png");
        this.y = y;
        this.x = x;
        World.add(world, this.body);

        this.body = Bodies.rectangle(700,600,7,320,options);
        World.add(world, this.body);

        this.body = Bodies.rectangle(900,600,7,320,options);
        World.add(world, this.body);
        
    }

    display(){
         
      var pos = this.body.position;
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, -100,-65,200, 220);
        //fill("yellow");
        pop();
    }
}
