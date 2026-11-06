class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01;
    this.obj = document.createElement("a-entity");

    let fire = document.createElement("a-cone");
    fire.setAttribute("radius-top",0);
    fire.setAttribute("radius-bottom",0.5);
    fire.setAttribute("height",1);
    fire.setAttribute("color","red");
    fire.setAttribute("position","0 0 -2");
    this.obj.append(fire);

    let base = document.createElement("a-cylinder");
    base.setAttribute("radius",0.5);
    base.setAttribute("height",2);
    base.setAttribute("color","gray");
    base.setAttribute("position","0 -1.5 -2");
    this.obj.append(base);

    let top = document.createElement("a-cone");
    top.setAttribute("radius-top",0);
    top.setAttribute("radius-bottom",0.5);
    top.setAttribute("height",2);
    top.setAttribute("color","orange");
    top.setAttribute("rotation","-180 0 0");
    top.setAttribute("position","0 -3.5 -2");
    this.obj.append(top);

    this.obj.setAttribute("position",{x:x, y:2, z:z});
    scene.append(this.obj);
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
}