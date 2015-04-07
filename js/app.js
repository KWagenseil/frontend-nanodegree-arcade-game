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

var startSpeed = function() {
    var ranSpeed = (Math.floor(Math.random() * 3) +1) * 100;
    return ranSpeed;
};

// Gem class function
function Gem(x,y, points) {
  this.x = x;
  this.y = y;
  this.points = points;
  this.sprite = 'images/Gem Blue.png';
};

// Gem location and collision code
Gem.prototype.update = function(playerPosition) {
  for(i = 0; i < allGems.length; i++){
      gemPosition = {
          'left':   allGems[i].x,
          'top': allGems[i].y,
          'right':  allGems[i].x,
          'bottom':    allGems[i].y,
        };
        if (playerPosition.left<gemPosition.right &&
            playerPosition.top<gemPosition.bottom &&
            playerPosition.right>gemPosition.left &&
            playerPosition.bottom>gemPosition.top) {
          // remove collected gem
          allGems.splice(i, 1);
          // kill enemies after all gems are gone
          if(allGems.length < 1) {
              allEnemies = [];
          }
        }
  }
};

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
  // Working on: if player gets hit by bug, player starts over as Kevin.png
  // if () {
  //   this.sprite = 'images/Kevin.png';
  // }
};

// Update Player location
Player.prototype.update = function(dt) {
    if (this.y < -15) {
      player.startOver();
    }
    // Defines player's area
    playerPosition = {
        'left':   this.x,
        'top': this.y,
        'right':  this.x+50,
        'bottom':    this.y+70,
    }
    // Iterate through allEnemies and define enemy area
    for(i = 0; i < allEnemies.length; i++){
        bugPosition = {
            'left':   allEnemies[i].x,
            'top': allEnemies[i].y,
            'right':  allEnemies[i].x+70,
            'bottom':    allEnemies[i].y+70,
        }
        // Collision detection
    if(playerPosition.left<bugPosition.right &&
        playerPosition.top<bugPosition.bottom &&
        playerPosition.right>bugPosition.left &&
        playerPosition.bottom>bugPosition.top){
        player.startOver(); }
    }

    Gem.prototype.update(playerPosition);
}

// Loads the hero to the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Responding to arrow commands; canvas is 505px wide, 606px tall.
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
  new Enemy(-101, startRow(), startSpeed(), 50),
  new Enemy(-101, startRow(), startSpeed(), 50),
  new Enemy(-101, startRow(), startSpeed(), 50),
  new Enemy(-101, startRow(), startSpeed(), 50),
];

var allGems= [
  new Gem(startColumn()+10, startRow()+30),
  new Gem(startColumn()+10, startRow()+30),
  new Gem(startColumn()+10, startRow()+30),
  new Gem(startColumn()+10, startRow()+30),
  ];

// var heart =  new Heart(startColumn()+10, startRow()+30);

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

                                          // add-ons still working on:
// Adding a point system somehow...
/* var points = {
  totalScore: 0,
  lastGemPoint: 0,
  add: function(gemPoints) {
    this.totalScore += (gemPoints || 0);
    this.lastGemPoint = gemPoints;
  }
}; */
// Heart location and collision code
/* Heart.prototype.update = function() {
heartPosition = {
'left':   heart.x,
'top': heart.y,
'right':  heart.x,
'bottom':    heart.y,
}
}; */
// Implement hearts into the game
/* function Heart(x,y) {
this.x = x;
this.y = y;
this.sprite = 'images/Heart.png';
}; */
//Loads the hearts to the screen
/* Heart.prototype.render = function() {
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}; */
