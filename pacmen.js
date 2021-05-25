// This array holds all the pacmen
const pacMen = []; 

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
} //end of function called setToRandom

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = 'images/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;
      
  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
} //end of fuction called makePac

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
} //end if functions callled update

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  const posX = item.position.x;
  const posY = item.position.y;

  if (posX <= 0 || posX >= window.innerWidth -115 ) {
    item.velocity.x *= -1;
  }
  if (posY <= 0 || posY >= window.innerHeight -115 ) {
    item.velocity.y *= -1;
  }
}//end of function called checkCollisions

function makeOne() {
  pacMen.push(makePac()); 
} // end of functiuon called makeOne

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
