class Ground{
    constructor(x,y){
        var options={
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y,1000,20,options);
        this.y = y;
        this.x = x;
        World.add(world, this.body);
    }

    display(){
         
        rectMode(CENTER);
        fill("white");
    }
}