let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dudes=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let x = -10; x < 10; x += 10){
    for(let z = -10; z < 10; z += 10){
      for(let y = -10; y < 10; y += 10){
        let d = new Dude(x,y,z);
        dudes.push(d);
      }
    }
  }
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let d of dudes){
    d.jump();
  }
  window.requestAnimationFrame( loop );
}
