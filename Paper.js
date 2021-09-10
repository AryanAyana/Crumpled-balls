class Ground {
    constructor(x,y,width, height) {
     var options = {
         isStatic: true,
         'restitution':0,
         'friction':0,
         'density':1,
     }   
    this.body = Bodies.circle(x,y, radius, options);
   this.radius = radius;
   
   
   World.add(world, this.body);
   }  
    display(){
    ellipseMode(RADIUS);
   
    fill("yellow");
   
    circle(this.body.position.x, this.body.position.y, this.radius)
    }
   };