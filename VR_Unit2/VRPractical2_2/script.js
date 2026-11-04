let scene,car;
let box;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  car = document.querySelector("#car");
  car.x = 0;
  car.dx = 0.01;

  pokemonball = document.querySelector("#pokemonball");
  pokemonball.x = 0;
  pokemonball.dx = 0.1;

  rocket = document.querySelector("#rocket");
  rocket.y = 0;
  rocket.dy = 0.1;

  dude = document.querySelector("#dude");
  dude.s = 0;
  dude.ds = 0.1;

  sun = document.querySelector("#sun");
  sun.a = 0;
  sun.da = 0.1;
  
  loop();
})

function loop(){
  car.x += car.dx;
  car.setAttribute("position",{x:car.x, y:0, z:0});

  pokemonball.x += pokemonball.dx;
  pokemonball.setAttribute("rotation",{x:pokemonball.x, y:0, z:0});

  rocket.y += rocket.dy;
  rocket.setAttribute("position",{x:0, y:rocket.y, z:0});

  dude.s += dude.ds;
  dude.setAttribute("scale",{x:0, y:dude.s, z:0});

  sun.a += sun.da;
  sun.setAttribute("opacity",sun.a);
  window.requestAnimationFrame(loop);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);