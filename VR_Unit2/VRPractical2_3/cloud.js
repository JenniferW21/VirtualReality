class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("position","0 4 0");
    this.obj.append( cloud1 );

    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("position","0.5 4 0");
    cloud2.setAtrribute("radius", 0.8);
    this.obj.append( cloud2 );
  
    let cloud3 = document.createElement("a-sphere");
    cloud3.setAttribute("position","-0.5 4 0");
    cloud3.setAtrribute("radius", 0.8);
    this.obj.append( cloud3 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}
