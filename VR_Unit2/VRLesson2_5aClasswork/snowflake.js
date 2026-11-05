class Snowflake{
  constructor(x,y,z){
    // Challenge 5: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("radius",0.4);

    scene.append(this.obj);

    this.y=y;
    this.dy=0.04;

  }

  //Challenge 6: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position
  fall(){
    this.y -= this.dy;

    if(this.y<0){
      this.y=6;
    }
    this.obj.setAttribute("position",{x:0, y:this.y, z:0});
  }
}