class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.08;
    this.obj = document.createElement("a-entity");

    let top = document.createElement("a-cone");
    top.setAttribute("radius-top",0);
    top.setAttribute("radius-bottom",0.5);
    top.setAttribute("height",1);
    top.setAttribute("color","red");
    top.setAttribute("position","0 0 -2");
    this.obj.append(top);

    let base = document.createElement("a-cylinder");
    base.setAttribute("radius",0.5);
    base.setAttribute("height",2);
    base.setAttribute("color","gray");
    base.setAttribute("position","0 -1.5 -2");
    this.obj.append(base);

    let fin1 = document.createElement("a-cylinder");
    fin1.setAttribute("scale","0.5 0.5 0.1");
    fin1.setAttribute("segments-radial",3);
    fin1.setAttribute("height",1.5);
    fin1.setAttribute("color","red");
    fin1.setAttribute("position","0.5 -2.3 -2");
    fin1.setAttribute("rotation","0 0 -80");
    this.obj.append(fin1);

    let fin2 = document.createElement("a-cylinder");
    fin2.setAttribute("scale","0.5 0.5 0.1");
    fin2.setAttribute("segments-radial",3);
    fin2.setAttribute("height",1.5);
    fin2.setAttribute("color","red");
    fin2.setAttribute("position","-0.5 -2.3 -2");
    fin2.setAttribute("rotation","0 0 80");
    this.obj.append(fin2);


    let fire = document.createElement("a-cone");
    fire.setAttribute("radius-top",0);
    fire.setAttribute("radius-bottom",0.5);
    fire.setAttribute("height",2);
    fire.setAttribute("color","orange");
    fire.setAttribute("rotation","-180 0 0");
    fire.setAttribute("position","0 -3.5 -2");
    this.obj.append(fire);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
}