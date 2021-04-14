class Blocks extends BaseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);
     // this.image = loadImage("sprites/wood2.png");
     // Matter.Body.setAngle(this.body, angle);
     this.visibility = 255;
    }

score(){
  if(this.visibility < 0 && this.visibility > -805){
    score ++;
  }

}
    display(){
      if(this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
      }
    }
   
  }
