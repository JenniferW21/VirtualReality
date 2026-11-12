class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.a = 0 ;
    this.da = 1;

    for(let i = 0; i < 2; i++)
    this.dy = 0.08;
    this.obj = document.createElement("a-entity");

    let head = document.createElement("a-sphere");
    head.setAttribute("radius",3);
    head.setAttribute("scale","1 0.6 1");
    head.setAttribute("color","#989FA3");
    head.setAttribute("position","0 -0.5 0");
    this.obj.append(head);

    let window = document.createElement("a-sphere");
    window.setAttribute("radius",3.2);
    window.setAttribute("scale","1 0.6 1");
    window.setAttribute("color","#989FA3");
    window.setAttribute("position","0 0 0");
    window.setAttribute("opacity",0.5);
    this.obj.append(window);

    let base = document.createElement("a-sphere");
    base.setAttribute("radius",2);
    base.setAttribute("scale","3 0.5 3");
    base.setAttribute("color","gray");
    base.setAttribute("position","0 -1 0");
    this.obj.append(base);


    let light = document.createElement("a-cone");
    light.setAttribute("radius-top",1);
    light.setAttribute("radius-bottom",4);
    light.setAttribute("opacity",0.5);
    light.setAttribute("height",8)
    light.setAttribute("color","#3CD070");
    light.setAttribute("position",{x:0, y:-5, z:0});
    this.obj.append(light);


    this.obj.setAttribute("position",{x:x, y:7, z:z});
    scene.append(this.obj);
  }

  invade(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y<6){
      this.obj.setAttribute("position",{x:this.x, y:6, z:this.z})
    }
  }

  spin(){
    this.a += this.da;
    this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
  }
}