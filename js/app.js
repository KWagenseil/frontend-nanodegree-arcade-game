var startSpeed = function() {
    var ranSpeed = (Math.floor(Math.random() * 3) +1) * 100;
    return ranSpeed;
};

// only 4 rows that bugs can crawl over
var row = [60, 145, 230, 315];
var startRow = function() {
    getStartRow = row[Math.floor(Math.random() * row.length)];
    return getStartRow;
};

// 606px high gems can be on any block
var column = [0, 101, 202, 303, 404, 505, 606];
var startColumn = function() {
    getStartColumn = column[Math.floor(Math.random() * row.length)];
    return getStartColumn;
};

// Gem class function
function Gem(x,y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/Gem Blue.png';
};

// Gem location and collision code
Gem.prototype.update = function() {
  for(e=0; e<allGems.length; e++){
      gemPosition = {
          'left':   allGems[e].x,
          'top': allGems[e].y,
          'right':  allGems[e].x+75,
          'bottom':    allGems[e].y+60,
        };
      };
}

//Loads the gems to the screen
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// New Enemy class function
function Enemy(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update Enemy location
Enemy.prototype.update = function(dt) {
    if (this.x < ctx.canvas.width) {
      this.x += this.speed * dt;
// Trying to add a collision update with 'player.position'
//     } else if ((this.x && this.startRow()) === (Player.x && Player.y)) {
//       this.x = 0;
//       this.y = startRow();
//       this.speed = startSpeed();
    } else {
      this.x = -85;
      this.y = startRow();
      this.speed = startSpeed();
    }
};

// Loads the enemies to the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// New Player class function
function Player(x,y) {
    this.x = x;
    this.y = y;
// this.sprite = add option to chose hero;
    this.sprite = 'images/char-horn-girl.png';
};

// Player reset function
Player.prototype.startOver = function() {
  this.x = 200;
  this.y = 400;
  // If player collects Kevin.png gem, player starts over as Kevin.png
  // if (allGems.splice(e, 1) === 'images/Kevin.png') {
  //   this.sprite = 'images/Kevin.png';
  // }
};

// Update Player location
Player.prototype.update = function(dt) {
    if (this.y < -15) {
      player.startOver();
    }
};

// Loads the hero to the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Responding to arrow commands; canvas is 505px wide and 606px tall.
Player.prototype.handleInput = function(arrow) {
  if (arrow === "left" && this.x > 0) {
      this.x -= 101;
  } if
     (arrow === "up" && this.y > 0) {
       this.y -= 83;
  } if
     (arrow === "right" && this.x < 400) {
       this.x += 101;
  } if
     (arrow === "down" && this.y < 400) {
       this.y += 83;
     };
};

// Intiantiated Enemy and Player objects
var allEnemies= [
  new Enemy(-101, startRow(), startSpeed()),
  new Enemy(-101, startRow(), startSpeed()),
  new Enemy(-101, startRow(), startSpeed()),
  new Enemy(-101, startRow(), startSpeed()),
];

var allGems= [
  new Gem(startColumn()+10, startRow()+30),
  new Gem(startColumn()+10, startRow()+30),
  new Gem(startColumn()+10, startRow()+30),
  new Gem(startColumn()+10, startRow()+30),
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
