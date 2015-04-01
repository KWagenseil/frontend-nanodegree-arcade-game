/* var startRow = function() {       // finish this later

}

var startSpeed = function() {       // finish this later

}
*/

// Enemies our player must avoid (COMPLETE)
function Enemy(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};
// Update enemy location based on movement, reaching the end, or colliding with the hero
Enemy.prototype.update = function(dt) {                           // This adds a new method called "update" to our previously defined Enemy class.
    if (this.x < /*ctx.*/canvas.width) {                          // "dt" is found in the engine.js file
      this.x += this.speed * dt;
    } else if (this.x && this.startRow(); === Player.x && Player.y) {         // Trying to add a collision update with 'player.position'
      this.x = 0;
      this.y = startRow();
      this.speed = startSpeed();
    } else {
      this.x = 0;
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
    this.sprite = 'images/char-horn-girl.png'
};

Player.prototype.update = function(dt) {              // Player update location
    if (this.y > /*ctx.*/canvas.height) || (this.x && this.y; === Enemy.x && Enemy.startRow();) {
      player.startOver();
    }
};

Player.prototype.render = function() {                // Loads the hero to the screen
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(arrow) {
  if (arrow === "left") {
      this.x -= /*pixels left*/;
  } if
     (arrow === "up") {
       this.y -= /*pixels up*/;
  } if
     (arrow === "right") {
       this.x += /*pixels right*/;
  } if
     (arrow === "down") {
       this.y += /*pixels down*/;
     };
}

Player.prototype.startOver = function() {
  this.x = /*start x*/;
  this.y = /*start y*/;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies= [
  new Enemy(x,startRow(), startSpeed()),
  new Enemy(x,startRow(), startSpeed()),
  new Enemy(x,startRow(), startSpeed()),
  new Enemy(x,startRow(), startSpeed()),
];

var enemy2 =
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
