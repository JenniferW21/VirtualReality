/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxx",
  "xTx------x-x-xccccx-----xccc-----x-xcx",
  "x-x-xxxxxx-x-xccccxxxxx-xxxxxxx-xx-xcx",
  "x-xxxTTTTx-x-xccccx----------T---x---x",
  "x--------x-x-xccccxxxxx-xxxx-T-xxx-x-x",
  "x-xxxxxxxx---xccccx-x-x-x----T-x-x-x-x",
  "x-x------x-xxxxxx-x-x-x-xxxxxx-x-x-x-x",
  "xxx-xxxx-x------x-xcccT------------x-x",
  "x--------x-xxxxxx-xcccT-xxxxxxxxxx-x-x",
  "x-T-xxx-----------x-xxx-x------------x",
  "x-x-T-x-xxxTTTxxx-x-x-x-x-x-xxxxxxxxxx",
  "x-x-x-x-x---------T-----x-x-xccccccc-x",
  "x-x---x-x-xxxxxxx-TTTxx-x-x-xTTTTxxx-x",
  "x-x-x-x-x-cccT----x---x-x-x----------x",
  "x---x-x-xxxxxxxxx-xxx-x-x-xxxxxxxxxx-x",
  "xxx-x-x-----------x------------------x",
  "xcx-x-x-x-xxxxxxx-x-xxxxxxxxxx-xxxxx-x",
  "xcx-x-T-x-xcccccc-x-xccccccc-x-T-x-x-x",
  "x---xcT-x-xxxxxxx-x-xcxxxxxx-x-T-x-x-x",
  "xcx-xcx-x-ccccccx-x-xccccccx---------x",
  "xcx-xxx-x-xxxxxxx-x-xxTTTTTT-x-x-xcccx",
  "xcx---------------x----------x-x-xcccx",
  "xcx-x-x-x-xxTTTTx-xTTTTTxxxxxx-x-xxxxx",
  "xcx---x-x-x--------------------------x",
  "xxxxx-x-x-TTTxxxx-xxxTTTT-xxx-TTTxxxxx",
  "xcc---x-T-x-----x-Tcxcccc-x-x-xccccc-x",
  "xxxxx-x-T-xTTxx-x-T-xxxxx-x-x-TTxxxx-x",
  "xccc--T-x-------T---------T----------x",
  "xxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene, coins=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
     /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }
      else if(cols[c]=="c"){
        let C = new Coin(c,1,r)
        coins.push(C);
      }
    }

  }
  
  loop();

})

function loop(){
  for(let coin of coins){
    coin.float();
    coin.spin();
  }

  window.requestAnimationFrame( loop );
}
