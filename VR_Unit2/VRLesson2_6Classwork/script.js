let scene;
let mechTemplate;
let army=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  for(let x = -10; x < 10; x += 10){
    for(let z = -10; z < 10; z += 10){
      let m = new Mech(x,10,z);
      army.push(m);
    }
  }
  mechTemplate = document.getElementById("mech-1");
  
  loop();
})
function loop(){
  for(let mech of army){
    mech.launch();
  }

  window.requestAnimationFrame( loop );
}
