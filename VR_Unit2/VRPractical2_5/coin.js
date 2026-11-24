class Coin{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01;
    this.a = 0 ;
    this.da = 0.7;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});

    let outer = document.createElement("a-cylinder");
    outer.setAttribute("color","#d6b70a");
    outer.setAttribute("radius",0.5);
    outer.setAttribute("height",0.1);
    outer.setAttribute("rotation","90 0 0");
    this.obj.append(outer);

    let inner = document.createElement("a-cylinder");
    inner.setAttribute("color","#FFD700");
    inner.setAttribute("radius",0.4);
    inner.setAttribute("height",0.14);
    inner.setAttribute("rotation","90 0 0");
    this.obj.append(inner);

    scene.append(this.obj);

  }

  float(){
    this.y += this.dy;
    if(this.y<1 || this.y>1.5){
      this.dy = -this.dy;
      console.log(this.dy);
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }

  spin(){
    this.a += this.da;
    this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
  }
}
