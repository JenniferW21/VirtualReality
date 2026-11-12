let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ], ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-100,100);
    let y = rnd(2,20);
    let z = rnd(-100,100);
    let rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }

  for(let i = 0; i < 20; i++){
    let x = rnd(-100,100);
    let y = rnd(20,30);
    let z = rnd(-100,100);
    let ufo = new UFO(x,y,z);
    ufos.push(ufo);
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    ufo.invade();
    ufo.spin();
  }
  window.requestAnimationFrame( loop );
}
