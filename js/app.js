var startSpeed = function() {
    var ranSpeed = (Math.floor(Math.random() * 2) +1) * 100;
    return ranSpeed;
};

var row = [60, 145, 230, 315];
var startRow = function() {
    getRandomRow = row[Math.floor(Math.random() * row.length)];
    return getRandomRow;
};

// Enemies our player must avoid (COMPLETE)
function Enemy(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};
// Update enemy location based on movement, reaching the end, or colliding with the hero
Enemy.prototype.update = function(dt) {                           // This adds a new method called "update" to our previously defined Enemy class.
    if (this.x < ctx.canvas.width) {                              // "dt" is found in the engine.js file
      this.x += this.speed * dt;
    // } else if (this.x && this.startRow() === Player.x && Player.y) {         // Trying to add a collision update with 'player.position'
    //   this.x = 0;
    //   this.y = startRow();
    //   this.speed = startSpeed();
    } else {
      this.x = -80;
      this.y = startRow();
      this.speed = startSpeed();
    }
};

// Draw the enemy on the screen, required method for game (COMPLETE)
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// New Player class function

function Player(x,y) {
    this.x = x;
    this.y = y;
    /* this.sprite = add option to chose hero; */
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {              // Player update location
    if ((this.y > ctx.canvas.height) || (this.x && this.y === Enemy.x && Enemy.startRow())) {
      player.startOver();
    }
};

Player.prototype.startOver = function() {
  this.x = 200;
  this.y = 400;
};

Player.prototype.render = function() {                // Loads the hero to the screen
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(arrow) {
  if (arrow === "left" && this.x > 25) {
      this.x -= 100;
  } if
     (arrow === "up" && this.y > 0) {
       this.y -= 85;
  } if
     (arrow === "right" && this.y < 600) {
       this.x += 100;
  } if
     (arrow === "down" && this.x < 400) {
       this.y += 85;
     };
}


// Intiantiated Enemy and Player objects
var allEnemies= [
  new Enemy(-80, startRow(), startSpeed()),
  new Enemy(-80, startRow(), startSpeed()),
  new Enemy(-80, startRow(), startSpeed()),
  new Enemy(-80, startRow(), startSpeed()),
];

var player = new Player(200, 400);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
