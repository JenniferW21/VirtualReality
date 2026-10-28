let scene,car;
let box;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  car = document.querySelector("#car");
  car.x = 0;
  box.dx = 0.01;
  
  loop();
})

function loop(){
  car.x += car.dx;
  car.setAttribute("rotation",{x:0, y:box.a, z:0});
  window.requestAnimationFrame(loop);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);