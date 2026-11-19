let maze = [
  "xxx-xxxxxxxxxxxxxxxxxx",
  "xTx-xxxx---xoxT------x",
  "x-x------x-x-xxxxxxx-x",
  "x-xxxxxxxx-x---------x",
  "x----x-----xxxxxxxxx-x",
  "x--x-x-xxxxx-x-------x",
  "x--x-x-x-------------x",
  "x-xx-x-x-xxxxxxxxxxxxx",
  "x-x--x-x-x-----------x",
  "x-xxxx-xxx-xxxxxxxxx-x",
  "x-----------------Tx-x",
  "xxxxxxxxxxxxxxxxxxxx-x",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})
