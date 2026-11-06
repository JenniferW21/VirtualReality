let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(2,20);
    let z = rnd(-20,20);
    let rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }
  window.requestAnimationFrame( loop );
}
