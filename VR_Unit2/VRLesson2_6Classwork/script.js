let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mechTemplate,army=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mechTemplate = document.getElementById("mech-1");
  
  for(let x = -10; x < 10; x += 10){
    for(let z = -10; z < 10; z += 10){
      let m = new Mech(x,10,z);
      army.push(m);
    }
  }
  
  
  loop();
})
function loop(){
  for(let m of army){
    m.launch();
  }

  window.requestAnimationFrame( loop );
}
