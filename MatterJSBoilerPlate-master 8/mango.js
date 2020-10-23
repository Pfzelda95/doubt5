class mango_1{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0.004,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/mango.png")
        World.add(world,this.body);
    }
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
          }

    



    









}