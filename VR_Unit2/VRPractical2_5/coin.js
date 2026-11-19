class Coin{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("color","#FFD700");
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("rotation","90 0 0");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }

  float(){
    this.y += this.dy;
    if(this.y<1 || this.y>2){
      this.dy = -this.dy;
      console.log(this.dy);
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}
